const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
        type: DataTypes.STRING,
    },

    dificultad: {
        type: DataTypes.ENUM,
        values : ["1","2","3","4","5"],
    },

    duracion: {
        type: DataTypes.INTEGER,
    },

    temporada: {
        type: DataTypes.ENUM,
        values: ["otoño", "verano", "primavera", "invierno"],
    },
    
    medida: {
        type: DataTypes.ENUM,
        values : ["hora(s)", "minuto(s)"]
    }
}, {timestamps: false,});
};



