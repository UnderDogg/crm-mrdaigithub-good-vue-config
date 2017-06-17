<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

         $this->call(UsersSeeder::class);
         $this->call(RolesSeeder::class);
         $this->call(Role_userSeede::class);

        Model::reguard();
    }
}
