import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx'

export default function App() {
  
  const[cities, setCities]= useState([]);
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }  
    
    function onClose(id){
      setCities(oldCities=> oldCities.filter(city=> city.id != id)) 
    }


  return (
    <div className="App"> 
     <h1>Henry</h1>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
    
    </div>
  );
}
