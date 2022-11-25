import { useState, useEffect } from "react";
import { PokemonErrorView } from "components/status/PokemonErrorView";
import { PokemonPendingView } from "components/status/PokemonPendingView";
import { ProkemonDataView } from "components/status/PokemonDataView";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error("Упс...ничего не найдено"));
      })
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Введите имя покемона</div>;
  }
  if (status === Status.PENDING) {
    return <PokemonPendingView />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <ProkemonDataView data={pokemon} />;
  }
};
