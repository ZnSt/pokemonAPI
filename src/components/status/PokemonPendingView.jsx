import { MdCatchingPokemon } from "react-icons/md";
export const PokemonPendingView = () => {
  return (
    <div>
      <div>
        <MdCatchingPokemon className="icon-spin" size="70" />
        Загружаем вашего покемона...
      </div>
    </div>
  );
};
