import React from "react"
import {Link} from "react-router-dom";

const PaisesParaFormulario = ({id, nombre, img, setValorPaises, valorPaises, getListaPaisDetalladoConActividades,}) => {
    const handlePaises = () => {
        if (valorPaises.paises.length===0){
            setValorPaises({...valorPaises, paises: [{id, img}]})
            getListaPaisDetalladoConActividades({caso: "agregar", id})
        }else{
            for (let index = 0; index < valorPaises.paises.length; index++) {
                if(valorPaises.paises[index].id===id){
                    setValorPaises({...valorPaises, error: `${id} Ya fue seleccionado`})
                    return
                }                 
            }
            setValorPaises({error: null, paises: [...valorPaises.paises, {id, img}]}) 
            getListaPaisDetalladoConActividades({caso: "agregar", id})         
        }
        return
    }
    return (
        <div>
            <h6>{nombre}</h6>
            <img src={img} alt={`bandera de: ${nombre}`} height="60px" width="60px"/>
            <button onClick={() => handlePaises()}>Seleccionar</button>
        </div>
    )
}
export default PaisesParaFormulario;