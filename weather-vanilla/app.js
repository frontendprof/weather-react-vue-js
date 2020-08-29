

const api={
    key:"b6cf9d3ea1693c4c05ed173fa6233f84",
    base:"api.openweathermap.org/data/2.5"
}

const searchBox=document.querySelector(".search-box");
searchBox.addEventListener("keypress",setQuery);


function setQuery(e){
    if(e.keyCode==13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}


function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city=document.querySelector(".location .city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;
}