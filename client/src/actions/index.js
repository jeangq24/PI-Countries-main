export const dataDB = () => {
    return  (dispatch) => {
      fetch(`http://localhost:3001/cargaData`)
        .then((respuesta) => respuesta.json())
        .then((data) => dispatch({ type: "dataDB", payload: data }))
        .catch((e) => console.log(e));
    };
  };

  export const getListaPaises = () => {
    return  async(dispatch) => {
      try {
        let respuesta = await fetch(`http://localhost:3001/countries`);
        let data = await respuesta.json();
        return dispatch({type: "GET_LISTA_PAISES", payload: data});      
         
      } catch (error) {

        return error;
      }
             
    };
  };  

  export const getListaPaisesBuscador = (nombre) => {
    return  (dispatch) => {
      fetch(`http://localhost:3001/countries?name=${nombre}`)
        .then((respuesta) => respuesta.json())
        .then((data) => dispatch({ type: "GET_LISTA_PAISES_BUSCADOS", payload: data }))
        .catch((e) => console.log(e));
    };
  };   
  
  export const valorPagina = (valor) =>{
    return {
      type: "PAGINADO", payload: valor
    }
  };

  export const getPaisesFiltrados = (filtro) =>{
    return {
      type: "PAISES_FILTRADOS", payload: filtro
    }
  };

  export const getListaPaisDetallado = (value) => {
    if(value.caso==="add"){
      return  async(dispatch) => {
        try {
          let respuesta = await fetch(`http://127.0.0.1:3001/countries/${value.value}`);
          let data = await respuesta.json();
          return dispatch({type: "GET_LISTA_PAIS_DETALLADO", payload: {caso: "add", data}});             
        } catch (error) {
  
         return error;
        }
               
      };
    }else {
      return {
        type: "GET_LISTA_PAIS_DETALLADO", payload: {caso: "reset", data: value.value}
      }
    }

  }

  export const resetPaisesFiltrados = () => {
    return {
      type: "RESET_PAISES_FILTRADOS"
    }
  }
  
  export const getListaPaisesFormulario = (nombre) => {
    return  (dispatch) => {
      fetch(`http://localhost:3001/countries?name=${nombre}`)
        .then((respuesta) => respuesta.json())
        .then((data) => dispatch({ type: "GET_LISTA_PAISES_FORMULARIO", payload: data }))
        .catch((e) => console.log(e));
    };
  }; 

  export const resetPaisesFormulario = () => {

    return {
      type: "RESET_PAISES_FORMULARIO"
    }
  };  

  export const getListaActividades = () => {
    return async (dispatch) => {
      try {
        let respuesta = await fetch(`http://localhost:3001/actividades`);
        let data = await respuesta.json();
        return dispatch({type: "GET_LISTA_ACTIVIDADES", payload: data});      
         
      } catch (error) {

        return error;
      }
             
    }
  }

  export const getListaPaisDetalladoConActividades = (obj) => {

    if(obj.caso==="agregar"){
      return  async(dispatch) => {
        try {
          let respuesta = await fetch(`http://127.0.0.1:3001/countries/${obj.id}`);
          let data = await respuesta.json();
          return dispatch({type: "GET_LISTA_PAIS_DETALLADO_CON_ACTIVIDADES", payload: {caso: obj.caso, data}});             
        } catch (error) {
  
         return error;
        }
      }
     }         
    
    if(obj.caso==="eliminar"){
      return {
        type: "GET_LISTA_PAIS_DETALLADO_CON_ACTIVIDADES", payload: {caso: obj.caso, id: obj.id}
      }
    }

    if(obj.caso==="reset"){
      return {
        type: "GET_LISTA_PAIS_DETALLADO_CON_ACTIVIDADES", payload: {caso: obj.caso}
      }
    }
}