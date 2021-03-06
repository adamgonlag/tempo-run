import { useState } from "react";
import styles from "../styles/components/Search.module.scss";

import Autosuggest from "react-autosuggest";

export default function SearchBar({ spotifyApi, setSeedList, seedList }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const updateQuery = (_event, { newValue }) => {
    setQuery(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = async ({ value }) => {
    if (!value) {
      setSuggestions([]);
      return;
    }
    try {
      const data = await spotifyApi.searchArtists(value, { limit: 5 });
      setSuggestions(data.artists.items);
    } catch (error) {
      setSuggestions([]);
    }
  };

  const onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter") {
      event.preventDefault();
    }
    setQuery("");
    // Check if seed already in list
    if (seedList.length > 0) {
      const duplicates = seedList.filter((seed) => suggestion.id === seed.id);
      if (duplicates.length === 0) {
        setSeedList((state) => [...state, suggestion]);
      }
    } else {
      setSeedList((state) => [...state, suggestion]);
    }
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search for artists to generate a new playlist",
    autoComplete: "off",
    value: query,
    name: "query",
    onChange: updateQuery,
  };

  return (
    <>
      <div className={styles.searchBar}>
        <span className="material-icons">search</span>

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />
      </div>
    </>
  );
}
