import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dataDB } from "../../actions/index.js";

const Portada = ({ dataDB }) => {
  useEffect(() => {
    dataDB();
   
  }, [dataDB]);

  return (
    <div id="portada">
      <h1>Henry Countries</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};
export default connect(null, { dataDB })(Portada);
