import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListaPaises, getListaPaisesBuscador, valorPagina, resetPaisesFiltrados } from "../../actions";

const Buscador = ({getListaPaises, getListaPaisesBuscador, valorPagina,
     resetPaisesFiltrados, valorInput, setValorInput}) => {

    useEffect(()=>{
       
        getListaPaises();
    },[])
        
   
    const handleSubmit = (event) =>{
        const {value}=event.target
        setValorInput(value)
        if(value.length===0){
            valorPagina(0);
            getListaPaises()

        }
        if(value.length>0){
            valorPagina(0);
            resetPaisesFiltrados()
            getListaPaisesBuscador(value)           
            
        }    
    }

    return (
        <form>
            <input placeholder="Buscar pais" value={valorInput} onChange={(e)=>handleSubmit(e)}/>
        </form>
    )
}

export default connect (null , {getListaPaises, getListaPaisesBuscador, valorPagina, resetPaisesFiltrados})(Buscador)