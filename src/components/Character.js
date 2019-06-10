import React from "react";

function Character({ character }) {
  return (
    <div key={`${character.name}-${character.id}`} className="character">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>
        <b>Status:</b> {character.status} - <b>Species:</b> {character.species}
      </p>
    </div>
  );
}

export default Character;
