import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { PokemonForm } from "./PokemonForm";
import { PokemonInfo } from "./PokemonInfo";
export class App extends Component {
  state = {
    pokemonName: "",
  };
  handleFormSubmitPokemon = (pokemonName) => {
    this.setState({ pokemonName });
  };
  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmitPokemon} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}
