<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Models\Starship;
Use App\Models\PilotStarship;

class StarshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $starships = Starship::all();
        return response()->json($starships, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $starship = new Starship();
        $starship->nombre = $request->nombre;
        $starship->modelo = $request->modelo;
        $starship->fabricante = $request->fabricante;
        $starship->save();
        return response()->json($starship, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $starship = Starship::find($id);
        if(!$starship){
            return response()->json(['message' => 'Starship no encontrado'], 404);
        }
        return response()->json($starship, 200);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $starship = Starship::find($id);
        if(!$starship){
            return response()->json(['message' => 'Starship no encontrado'], 404);
        }
        $starship->nombre = $request->nombre;
        $starship->modelo = $request->modelo;
        $starship->fabricante = $request->fabricante;
        $starship->save();
        return response()->json($starship, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $starship = Starship::find($id);
        if(!$starship){
            return response()->json(['message' => 'Starship no encontrado'], 404);
        }
        $starship->delete();
        return response()->json(['message' => 'Starship eliminado correctamente'], 200);
    }

    //MANDA UN JSON DE LOS PILOTOS ASOCIADOS AL ID DE UNA NAVE
    public function getShipPilots($id){

        $data = PilotStarship::where(["id_starship"=>$id])->get();
        foreach( $data as $pilotShip){
          $pilotShip->pilot=$pilotShip->getPilotbyId($pilotShip->id_pilot);
        }
        return response()->json($data, 200);
      }

      //MANDA UN JSON CON LA RELACION DE PILOTOS Y NAVES
    public function getPilotShip(){
        $data = PilotStarship::get();
        return response()->json($data, 200);
      }
  
    //RECIBE DATOS Y HACE UNA RELACION DE PILOTO-NAVE
    public function createPilotShip(Request $request){
        $data['id_pilot'] = $request['id_pilot'];
        $data['id_starship'] = $request['id_starship'];
  
        PilotStarship::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
    
    public function deletePilotShip($id){
      $res = PilotStarship::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }
}
