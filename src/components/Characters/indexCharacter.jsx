import CharCard from "../CharCard/indexCard";
import "./styleCharacter.css";

const Characters = ({ characterList }) => {
  return (
    <>
      <h1>Characters</h1>
      <div className="cards">
      {characterList.map((item) => (
        <CharCard char={item} key={item.id} />
      ))}
      </div>
    </>
  );
};

export default Characters;
