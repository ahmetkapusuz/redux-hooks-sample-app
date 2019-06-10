import React from "react";
import Character from "./Character";

function CharacterGrid({ characters }) {
  if (!characters) {
    return <div className="character-grid" />;
  }

  return (
    <div className="character-grid">
      {characters.length === 0 && <h2>No results found!</h2>}
      {characters.map((character, index) => (
        <Character character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
