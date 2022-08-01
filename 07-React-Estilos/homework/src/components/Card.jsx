import React from 'react';
import styles from '../styles/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return <div className={`${styles.card}`}>
            <button onClick={props.onClose}className={`${styles.btn} ${styles.btnColor}`}>x</button>
            <h4>{props.name}</h4>
            <div className={`${styles.mDiv}`}>
            <p>Min</p>
            <p>{props.min}</p>
            <p>Max</p>
            <p>{props.max}</p>
            </div>
              <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={'img'} />
           
        </div>
};