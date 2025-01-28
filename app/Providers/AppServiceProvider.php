<?php

namespace App\Providers;

use App\Services\CreditCalculator;
use App\Services\CurrencyConverter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(CurrencyConverter::class, function ($app) {
            return new CurrencyConverter();
        });

        $this->app->singleton(CreditCalculator::class, function ($app) {
            return new CreditCalculator();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
