console.log("hey");
const searchBar = document.querySelector(".Search_searchBar__3C5Uk");
const input = document.querySelector(".react-autosuggest__input");

input.addEventListener("click", (e) => console.log(e.target));
searchBar.addEventListener("click", (e) => console.log(e.target));
