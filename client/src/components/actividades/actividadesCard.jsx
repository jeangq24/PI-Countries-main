import React from "react";

const ActividadesCard = ({nombre, dificultad, duracion, temporada, countries, medida}) => {

    let X=""
    switch (dificultad) {
        case "1":
            X="Tranquila"
            break;
        case "2":    
            X="Agitada"
            break;
        case "3": 
            X="Agotadra" 
            break 
        case "4":    
            X="Dificil"
            break; 
        case "5":    
            X="Extrema"
            break;        
        default:
            break;
    }
    return (
        <div>         
            <h4>{nombre}</h4>
            <h6>{"Tiempo estimado: "+duracion+" "+medida}</h6>
            <h6>{"Dificultad: "+X}</h6>
            <h6>{"Temporada: "+temporada}</h6>
            <div>{countries.map(({id, nombre, img}) => {
                return <div key={id}>
                    <h6>{nombre}</h6>
                    <img src={img} alt={`bandera de: ${nombre}`} height="30px" width="30px"/>
                </div>
            })}</div>
        </div>
        
    )
}

export default ActividadesCard
