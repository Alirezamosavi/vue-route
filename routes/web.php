<?php

use Illuminate\Support\Facades\Route;




Route::get('/{any?}', function (){
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');


///{any?}:
 ///we write this code and the meaning is every Addresses or Routes that there are in our Project