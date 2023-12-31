<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pilot extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'birth_year',
        'gender',
        'species'
    ];

//------------------------------------------------------------------------------------------------
    //pilotos no asignados
    public function unPilots(){
        $misPilotos=$this->pilots->pluck('pilots.id');

        $unPilots=Pilot::whereNotIn('id',$misPilotos)->get();
        return $unPilots;
    }
}
