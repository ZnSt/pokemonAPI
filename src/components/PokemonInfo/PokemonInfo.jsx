import { Component } from "react";
import { PokemonErrorView } from "components/status/PokemonErrorView";
import { PokemonPendingView } from "components/status/PokemonPendingView";
import { ProkemonDataView } from "components/status/PokemonDataView";

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, _) {
    const { pokemonName } = this.props;
    if (prevProps.pokemonName !== pokemonName) {
      console.log(prevProps.pokemonName);
      this.setState({ status: "pending" });

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error("Упс...ничего не найдено"));
        })
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Введите имя покемона</div>;
    }
    if (status === "pending") {
      return <PokemonPendingView />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <ProkemonDataView data={pokemon} />;
    }
  }
}
