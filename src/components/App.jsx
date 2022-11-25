import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { PokemonForm } from "./PokemonForm";
import { PokemonInfo } from "./PokemonInfo";
export const App = () => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
