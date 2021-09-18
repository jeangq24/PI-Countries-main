import React from "react";
import { connect } from "react-redux";
import HomeCard from "./homeCard";
import {Link} from "react-router-dom";
import {valorPagina, getPaisesFiltrados, resetPaisesFiltrados, getListaPaises } from "../../actions";

const Home = ({paises, valorPagina, paginado, getPaisesFiltrados,
     paisesFiltrados, resetPaisesFiltrados, getListaPaises, setValorInput}) => {
    

    const PaginaSiguiente=()=>{
        if(!paisesFiltrados[0]?paises.slice(paginado, paginado+9).length > paises.length%9:
        paisesFiltrados.slice(paginado, paginado+9).length > paisesFiltrados.length%9) {
            valorPagina(paginado+9);
        }      
    }

    const PaginaAnterior=()=>{
        if (paginado > 0) {
            valorPagina(paginado-9);
        }
    }
    
    
    const filtradoContinente = (event)=>{
        const {value} = event.target;
        valorPagina(0)
        getPaisesFiltrados({caso: "continente", value})
        
    }

    const filtradoPoblacion=(event) => {
        const {value}= event.target;
        valorPagina(0)
        if(value==="Mayor"){
            resetPaisesFiltrados()
            getPaisesFiltrados({caso: "poblacionMayor"})
        }
        if(value==="Menor"){
            resetPaisesFiltrados()
            getPaisesFiltrados({caso: "poblacionMenor"})
        }
    }
        
    const filtradoAlfabetico= (event) => {
        const {value}= event.target;
        valorPagina(0)
        if(value==="Desc"){
            resetPaisesFiltrados()
            getPaisesFiltrados({caso: "descendente"})
        };
        if(value==="Asc"){
            resetPaisesFiltrados()
            getPaisesFiltrados({caso: "ascendente"})            
        }
    }

    const handleActividades = ()=>{
        valorPagina(0) 
        resetPaisesFiltrados()
        getPaisesFiltrados({caso: "actividades"})        
        
    }

    const limpiarFiltro = ()=>{
        valorPagina(0)
        resetPaisesFiltrados()
        getListaPaises()
        setValorInput("")
    
    }

    return (
        <div id="home">
            <button onClick={() => PaginaAnterior()}>Pagina Anterior</button>
            
            <select>
                <option onClick={()=>limpiarFiltro()} value="dafault" >Filtrar por...</option>
                    <optgroup label="Continente">
                        <option onClick={(e)=>filtradoContinente(e)} value="Africa">Africa</option>
                        <option onClick={(e)=>filtradoContinente(e)} value="Americas">Americas</option>
                        <option onClick={(e)=>filtradoContinente(e)} value="Asia">Asia</option>
                        <option onClick={(e)=>filtradoContinente(e)} value="Europe">Europe</option>
                        <option onClick={(e)=>filtradoContinente(e)} value="Oceania">Oceania</option>
                        <option onClick={(e)=>filtradoContinente(e)} value="Polar">Polar</option>
                    </optgroup>
                    <optgroup label="Poblacion">
                        <option onClick={(e)=>filtradoPoblacion(e)} value="Mayor">Mayor</option>
                        <option onClick={(e)=>filtradoPoblacion(e)} value="Menor">Menor</option>
                    </optgroup> 
                    <optgroup label="Actividades">
                        <option onClick={()=>handleActividades()}>Con actividades</option>
                    </optgroup>                   
                    <optgroup label="Orden Alfabetico">
                        <option onClick={(e)=>filtradoAlfabetico(e)} value="Asc">Ascendente</option>
                        <option onClick={(e)=>filtradoAlfabetico(e)} value="Desc">Descendente</option>
                    </optgroup>

            </select>
            <button onClick={() =>limpiarFiltro()}>Quitar Filtro</button>
            <Link to="addActividad"><button>Crear Actividad</button></Link>
            <Link to="/actividades"><button>Ver actividad</button></Link>
            <button onClick={() => window.history.go(-1)}>Cerrar APP</button>
            <button onClick={() => PaginaSiguiente()}>Pagina Siguiente</button>
            
    
            {!paisesFiltrados[0]?paises[0]?paises.slice(paginado, paginado+9).map(({id,nombre,img,continente}) => {
                return (
                  
                        <HomeCard key={id}
                        id={id}
                        nombre={nombre}
                        img={img}
                        continente={continente}
                        />
                )
            }):<h1>No se encontratron resultados</h1>:paisesFiltrados[0]?paisesFiltrados.slice(paginado, paginado+9).map(({id,nombre,img,continente}) => {
                return (
                  
                        <HomeCard key={id}
                        id={id}
                        nombre={nombre}
                        img={img}
                        continente={continente}
                        />
                )
            }):<h1>No se encontraron resultados</h1>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        paises: state.paises,
        paisesFiltrados: state.paisesFiltrados,
        paginado: state.paginado

    }
};

export default connect(mapStateToProps, {valorPagina, getPaisesFiltrados, resetPaisesFiltrados, getListaPaises})(Home);