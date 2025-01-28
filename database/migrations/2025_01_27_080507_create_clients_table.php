<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) 
        {
            $table->string('Ref', 30)->primary(); // унікальний ідентифікатор заявки
            $table->integer('idClient'); // ідентифікатор клієнта
            $table->timestamp('dateCurr'); // поточна дата та час на момент надходження запиту до апі
            $table->string('phone', 45)->nullable(); // номер телефону клієнта
            $table->string('mail', 45)->nullable(); // email
            $table->string('address', 45)->nullable(); // адреса клієнта
            $table->decimal('monthSalary', 15, 2)->nullable(); // сума доходу клієнта
            $table->char('currSalary', 3)->nullable(); // валюта доходу клієнта
            $table->string('decision', 45)->nullable(); // рішення по кредиту
            $table->decimal('limitItog', 15, 2)->nullable(); // кредитний ліміт, який ми можемо надати
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
