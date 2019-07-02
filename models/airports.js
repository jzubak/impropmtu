module.exports = function(sequalize, DataTypes){
const Airport = sequalize.define("Airport",{
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
  Airport.hasMany(models.Searchresult, {

  })
  // Airport.hasMany(models.IMGresult, {

  // })
  Airport.belongsTo(models.destinations, {  
      foreignKey: {
      allowNull: false
    }
  });
};
return Airport;

};


