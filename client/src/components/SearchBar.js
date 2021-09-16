import { useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

export default function SearchBar({ spotifyApi }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const updateQuery = (_event, { newValue }) => {
    setQuery(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    if (!value) {
      setSuggestions([]);
      return;
    }
    spotifyApi
      .searchArtists(value)
      .then((data) => {
        console.log(data.artists.items);
        setSuggestions(data.artists.items.slice(0, 5));
      })
      .catch((err) => {
        setSuggestions([]);
      });
  };

  const onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter") {
      event.preventDefault();
    }
    setQuery(suggestion.name);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search",
    autoComplete: "abcd",
    value: query,
    name: "query",
    onChange: updateQuery,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );
}
