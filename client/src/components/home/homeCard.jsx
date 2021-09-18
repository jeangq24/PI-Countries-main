import React from "react"
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {getListaPaisDetallado} from "../../actions/index.js";

const HomeCard = ({id, nombre, img, continente, getListaPaisDetallado})=>{
 return (
    <Link onClick={() => getListaPaisDetallado(id)} to="/detalles">
     <div id="homeCard">
         <h2>{nombre}</h2>
         <h4>Continente {continente?continente:"No registrado"}</h4>
         <img src={img} alt={`bandera de: ${nombre}`} height="200px" width="200px"/>
     </div>
     </Link>
 )
}

export default connect(null, {getListaPaisDetallado})(HomeCard);