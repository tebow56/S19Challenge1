function RickCard({ character }) {
  return (
    <div className="rick-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default RickCard;