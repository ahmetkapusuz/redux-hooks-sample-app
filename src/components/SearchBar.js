import React, { useRef, useState } from "react";

function SearchBar({ searchClicked }) {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  const onInputChange = event => {
    setSearchValue(event.target.value);
  };

  const onSearchClicked = () => {
    searchClicked(searchValue);
  };

  const onKeyUp = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSearchClicked();
    }
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        value={searchValue}
        placeholder="Search for a character"
        className="search-input"
        onChange={onInputChange}
        onKeyUp={onKeyUp}
      />
      <button onClick={onSearchClicked}>Search</button>
    </div>
  );
}

export default SearchBar;
