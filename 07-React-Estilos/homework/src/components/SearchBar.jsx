import React from 'react';
import styles from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return  (
    <div className={`${styles.container}`}>
    <input type="text" placeholder='Ciudad...'/>
    <button onClick={()=>props.onSearch('Buscando ciudad')}className={`${styles.btn}`}>Agregar</button>
    </div>
    )
};