import React from "react";
import styles from "./About.module.css"

export const Abaut = () => {
    return (
       <div className={styles.container} id="reservar"> 
        <h2 className={styles.title}>RESERVACION DE LA MESA</h2>
        <br/>
        <div className={styles.content}>
            <form className={styles.form}>
            <label for="fname" className={styles.label}>Numero de Personas: </label>
            <input className={styles.input} type="number"/><br/>

            <label for="fname"className={styles.label}>Dia: </label>
            <input className={styles.input} type="date" /> <br/>

            <label for="fname"className={styles.label}>Hora: </label>
            <input className={styles.input} type="time"/> <br/>
           
            <label for="fname" className={styles.label}>DIA - HORA: </label>
            <input className={styles.input} type="datetime-local"/><br/>

            <input type="button" onclick="alert('Hello World!')" value="Click Me!"></input>
            </form> 
        </div>
       </div>
       
    )
    

}
