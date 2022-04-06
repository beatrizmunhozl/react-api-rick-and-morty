import "./styleCard.css";

const CharCard = ({ char }) => {
  return (
    <div className={char.status === "Alive" ? "Alive" : "Other"}>
      <img src={char.image} alt={char.name} />
      <p>{char.name}</p>
      <span>Species: {char.species}</span>
    </div>
  );
};

export default CharCard;
