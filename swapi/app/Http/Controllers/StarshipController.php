<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Models\Starship;

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
}
