import React from 'react'
import './Ciudad.css';

function City ({city}){
  
    if(!city){alert('la cuidad no existe'); return (<div>la cuidad no existe</div>)}
 
    return (
    <div className="city">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
     </div>
  )
}


export default City;