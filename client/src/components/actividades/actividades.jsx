import React, { useEffect} from "react";
import { connect } from "react-redux";
import { getListaActividades } from "../../actions/index.js";
import ActividadesCard from "./actividadesCard.jsx"

const Actividades = ({getListaActividades, actividades}) => {

    useEffect(() => { getListaActividades() }, [])

return (

    <div id="actividades">
        <button onClick={() => window.history.go(-1)}>Regresar</button>
        {actividades[0]?actividades.map(({id, nombre, dificultad, duracion, temporada, medida, countries}) => {
            return (
                <ActividadesCard key={id} id={id} nombre={nombre} dificultad={dificultad} duracion={duracion}
                temporada={temporada} medida={medida} countries={countries}/>
            )
        }):<h1>No se encontraron Actividades Registradas</h1>}

    </div>
)
}

const mapStateToProps=(state)=>{
return {
    actividades: state.actividades
}
}

export default connect(mapStateToProps, {getListaActividades})(Actividades)