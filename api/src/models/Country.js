const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    continente: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 

    subregion: {
      type: DataTypes.STRING,
    },

    area: {
      type: DataTypes.FLOAT,
    },

    poblacion: {
      type: DataTypes.FLOAT,
    },
    
  },{timestamps: false,});
};
