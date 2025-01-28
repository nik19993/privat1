<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'idClient' => 'required|integer',
            'dateBirthday' => 'required|date',
            'phone' => 'nullable|string',
            'mail' => 'nullable|string|email',
            'address' => 'nullable|string',
            'monthSalary' => 'nullable|numeric',
            'currSalary' => 'nullable|string',
            'requestLimit' => 'required|numeric',
        ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $errors = $validator->errors()->toArray();
        $recommendations = [];

        foreach ($errors as $field => $messages) {
            foreach ($messages as $message) {
                $recommendations[] = "Проблема з полем {$field}: {$message}";
            }
        }

        $response = response()->json([
            'errors' => $errors,
            'recommendations' => $recommendations
        ], 422);

        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }
}
