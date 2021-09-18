import React from "react"

const DetalladoCard = ({id, nombre, img, continente, capital, subregion, area, poblacion, actividades, setValorInput}) => {
    let actividades2=[]
    if(actividades[0]){
       
        for (let index = 0; index < actividades.length; index++) {
            const {nombre, duracion, temporada, dificultad, medida}=actividades[index]
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
          
            actividades2.push({id, nombre, duracion: duracion+" "+medida, dificultad: X, temporada})
            
        }
    }

    const regresarHome= () => {
        setValorInput("")
        window.history.go(-1)
    }
    return (
        <div id="detalladoCard">
            <button onClick={() => regresarHome()}>Regresar</button>
            <h2>{nombre}</h2>
            <h4>Continente {continente?continente:"No registrado"}</h4>
            <h4>Capital {capital}</h4>
            <h5>Subregion {subregion}</h5>
            <h6>Area de {area.toLocaleString()+" km2"}</h6>
            <h6>Poblacion de {poblacion.toLocaleString()+" habitantes(Apx)"}</h6>
            <h6>Actividades: {actividades2[0]?<div>{actividades2.map(({id, nombre, duracion, dificultad, temporada})=>{
            return (
                <div key={id}>
                    <p>Nombre: {nombre}</p>
                    <p>Tiempo estimado: {duracion}</p>
                    <p>Dificultad: {dificultad.toLowerCase()}</p>
                    <p>Temporada: {temporada}</p>
                </div>    
            )
            })}</div>:" No se han registrado actividades"}</h6>
            <img src={img} alt={`bandera de: ${nombre}`} height="200px" width="200px"/>
        </div>
    )
}

export default DetalladoCard