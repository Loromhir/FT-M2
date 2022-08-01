import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import City from '../components/City';
import About from '../components/About.jsx'
import { Route } from 'react-router-dom';
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(city) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route 
      path={'/'} render={()=><Nav onSearch={onSearch}/>}/>      
      
      <Route exact path='/about'render={()=> <About />}
        />
      <div>
      <Route 
      exact path={'/'}
      render={()=> <Cards cities={cities} onClose={onClose}/>}
        />
       <Route 
        exact path={'/ciudad/:cityId'}
        render={({match})=> <City city={onFilter(match.params.cityId)}/>}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
