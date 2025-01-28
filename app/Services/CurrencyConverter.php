<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CurrencyConverter
{
    public function convertToUAH(?float $amount = 0, ?string $currency = 'UAH'): float
    {
        if ($currency === 'UAH') {
            return $amount;
        }

        $rates = $this->fetchRates();
        return $amount * ($rates[$currency] ?? 1);
    }

    private function fetchRates(): array
    {
        $response = Http::get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        $data = $response->json();
        $rates = [];

        foreach ($data as $rate) {
            if ($rate['ccy'] === 'USD') {
                $rates['USD'] = (float) $rate['sale'];
            } elseif ($rate['ccy'] === 'EUR') {
                $rates['EUR'] = (float) $rate['sale'];
            }
        }

        return $rates;
    }
}