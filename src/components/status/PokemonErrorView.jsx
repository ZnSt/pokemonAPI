import catCry from "../../images/catCry.jpeg";
export const PokemonErrorView = ({ message }) => {
  return (
    <div>
      <img src={catCry} width="240" alt="cry cat" />
      <p>{message}</p>
    </div>
  );
};
