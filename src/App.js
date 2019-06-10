import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { fetchCharacters } from "./redux/actions";
import { getCharacters } from "./redux/selectors";
import CharacterGrid from "./components/CharacterGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCharacters(searchKeyword));
  }, [dispatch, searchKeyword]);

  useEffect(() => {
    if (characters) {
      console.log("characters", characters);
      setLoading(false);
    }
  }, [characters]);

  return (
    <div className="App">
      <header className="App-header">Rick and Morty Character Search</header>
      <main>
        <SearchBar
          searchClicked={keyword => {
            setSearchKeyword(keyword);
          }}
        />
        {loading && <h1>Loading</h1>}
        {!loading && characters && characters.results && (
          <CharacterGrid characters={characters.results} />
        )}
      </main>
    </div>
  );
}

export default App;
