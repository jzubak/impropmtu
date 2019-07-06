module.exports = function (sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    code: DataTypes.STRING,
    CityName: DataTypes.STRING,
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
  Destination.associate = function (models) {
    Destination.hasMany(models.SearchResult, {

    })
    Destination.belongsTo(models.Airport, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Destination;

};

