import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setPokemonName(value.toLowerCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (pokemonName.trim() === "") {
      toast("Введите имя покемона");
      return;
    }
    onSubmit(pokemonName);
    setPokemonName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Тут мы ждемс вашего покена"
        onChange={handleChange}
        value={pokemonName}
      />
      <button type="submit">Искать</button>
    </form>
  );
};
