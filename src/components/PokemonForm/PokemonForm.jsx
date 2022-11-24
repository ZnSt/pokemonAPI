import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };
  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ pokemonName: value.toLowerCase() });
  };

  handleFormSubmit = (event) => {
    const { pokemonName } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    if (pokemonName.trim() === "") {
      toast("Введите имя покемона");
      return;
    }
    onSubmit(pokemonName);
    this.reset();
  };

  reset = () => {
    this.setState({ pokemonName: "" });
  };
  render() {
    const { pokemonName } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Тут мы ждемс вашего покена"
          onChange={this.handleChange}
          value={pokemonName}
        />
        <button type="submit">Искать</button>
      </form>
    );
  }
}
