import React from "react";
import "./style/detalles.css";
import {Link} from "react-router-dom";

const DetalladoCard = ({id, nombre, img, continente, capital, subregion, area, poblacion, actividades, setValorInput}) => {
    let actividades2=[]
    let cont=0;
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
            <div id="contenedorBoton">
                <Link to="Home"><button id="btnRegresarDetallado">Home</button></Link>
                <button id="btnRegresarDetallado" onClick={() => regresarHome()}>Ir Atras</button>
            </div>
            <div id="detalles">
                <h2 id="hDos">{nombre}</h2>
                <div id="imgDetalles" style={{backgroundImage: `url("${img}")`}}></div>
                <h4 id="hCuatro">Continente {continente?continente:"No registrado"}</h4>
                <h4 id="hCuatro">Capital {capital}</h4>
                <h5 id="hCinco">Subregion {subregion}</h5>
                <h6 id="hSeis">Area de {area.toLocaleString()+" km2"}</h6>
                <h6 id="hSeis">Poblacion de {poblacion.toLocaleString()+" habitantes(Apx)"}</h6>
                {actividades2[0]?<Link to="/actividades"><div id="contenedorActividades">{actividades2.map(({id, nombre, duracion, dificultad, temporada}, index)=>{
                console.log(index++)
                return (
                    
                    <div key={id} className="activiades">
                        <p id="pActividades">Actividad N° {index}</p>
                        <p id="pActividades">Nombre: {nombre}</p>
                        <p id="pActividades">Tiempo estimado: {duracion}</p>
                        <p id="pActividades">Dificultad: {dificultad.toLowerCase()}</p>
                        <p id="pActividades">Temporada: {temporada}</p>
                    </div>    
                )
                })}</div></Link>:<h6 id="hSeis">Actividades:  No se han registrado actividades</h6>}
                

            </div>
            
        </div>
    )
}

export default DetalladoCard