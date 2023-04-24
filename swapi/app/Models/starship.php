<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class starship extends Model
{
    use HasFactory;

    protected $fillable=['name','credits', 'model', 'manufacturer', 'img'];
    protected $casts =[
        'pilot' => 'array'
    ];


    public function pilots(){

        return $this->belongsToMany('App\Models\pilot')->withTimestamps();
    }

//--------------------------------------PARA AJAX-------------------------------------------
    //pilotos no asignados
    public function unPilots(){
        $misPilotos=$this->pilots->pluck('pilots.id');

        $unPilots=Pilot::whereNotIn('id',$misPilotos)->get();
        return $unPilots;
    }
}
