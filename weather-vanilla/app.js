

const api={
    key:"b6cf9d3ea1693c4c05ed173fa6233f84",
    baseurl:"api.openweathermap.org/data/2.5"
}

const searchBox=document.querySelector(".search-box");
searchBox.addEventListener("keypress",setQuery);