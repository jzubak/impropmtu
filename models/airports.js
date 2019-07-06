module.exports = function(sequelize, DataTypes){
const Airport = sequelize.define("Airport",{
  code: DataTypes.STRING,
  Beach: DataTypes.STRING,
  Urban: DataTypes.STRING,
  Hiking: DataTypes.STRING,
  Food: DataTypes.STRING,
  Nightlife: DataTypes.STRING,
  Sports: DataTypes.STRING,
  Music: DataTypes.STRING,
  LaidBack: DataTypes.STRING,
  Ski: DataTypes.STRING
});

Airport.associate = function(models) {
  Airport.hasMany(models.SearchResult, {

  })
  // Airport.hasMany(models.IMGresult, {

  // })
  Airport.belongsTo(models.Destination, {  
      foreignKey: {
      allowNull: false
    }
  });
};
return Airport;

};


