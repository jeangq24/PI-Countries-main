import React from "react";
import { connect } from "react-redux";
import DatalladoCard from "./detalladoCard.jsx";

const Detallado = ({paisDetallado, setValorInput}) =>{
 
    return (
        <>
        {paisDetallado.map(({id, nombre, img, continente, capital, subregion, area, poblacion, activities})=>{
            return (
                <DatalladoCard
                key={id} nombre={nombre} img={img} continente={continente} capital={capital} subregion={subregion}
                area={area} poblacion={poblacion} actividades={activities} setValorInput={setValorInput}
                />
            )
        })}
        </>

    )
}
const mapStateToProps=(state)=>{
    return {
        paisDetallado: state.paisDetallado
    }
}
export default connect(mapStateToProps, null)(Detallado)

