<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ClientRequest;
use App\Models\Client;
use App\Services\CreditCalculator;
use App\Services\CurrencyConverter;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ClientController extends Controller
{

    private $currencyConverter;
    private $creditCalculator;

    public function __construct(CurrencyConverter $currencyConverter, CreditCalculator $creditCalculator)
    {
        $this->currencyConverter = $currencyConverter;
        $this->creditCalculator = $creditCalculator;
    }

    public function index(){

    }

    public function store(ClientRequest $clientRequest){
        $data = $clientRequest->validated();

        $currencyConverter = $this->currencyConverter;
        $salaryInUAH = $currencyConverter->convertToUAH($data['monthSalary'], $data['currSalary']);

        $creditCalculator = $this->creditCalculator;
        $limitItog = $creditCalculator->calculateLimit($data['phone'], $salaryInUAH, $data['requestLimit'], $data['dateBirthday']);

        $decision = $limitItog > 0 ? 'accept' : 'decline';

        $client = new Client();
        $client->fill($data);
        $client->Ref = Str::random(30);
        $client->dateCurr = Carbon::now();
        $client->limitItog = $limitItog;
        $client->decision = $decision;
        $client->save();

        return response()->json([
            'Ref' => $client->Ref,
            'limitItog' => $limitItog,
            'decision' => $decision
        ]);
   
    }
}
