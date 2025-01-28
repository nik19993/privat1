<?php

namespace App\Services;

use DateTime;

class CreditCalculator
{
    public function calculateLimit(?string $phone = '', float $salaryInUAH, float $requestLimit, string $dateBirthday): float
    {
        $age = $this->calculateAge($dateBirthday);
        if ($age < 18) {
            return 0;
        }

        $k = $this->determineKFactor($phone);
        $limitItog = $k * $salaryInUAH;

        return min($limitItog, $requestLimit);
    }

    private function determineKFactor(string $phone): float
    {
        if (preg_match('/^067|068|096|097|098/', $phone)) {
            return 0.95;
        } elseif (preg_match('/^050|066|095|099/', $phone)) {
            return 0.94;
        } elseif (preg_match('/^063|073|093/', $phone)) {
            return 0.93;
        } else {
            return 0.92;
        }
    }

    private function calculateAge(string $dateBirthday): int
    {
        $birthDate = new DateTime($dateBirthday);
        $currentDate = new DateTime();
        $age = $currentDate->diff($birthDate)->y;

        return $age;
    }
}