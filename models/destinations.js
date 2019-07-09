module.exports = function (sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    cityName: DataTypes.STRING,
    beach: DataTypes.STRING,
    urban: DataTypes.STRING,
    hiking: DataTypes.STRING,
    food: DataTypes.STRING,
    nightlife: DataTypes.STRING,
    historic: DataTypes.STRING,
    ski: DataTypes.STRING,
    quiet: DataTypes.STRING,
    kidfriendly: DataTypes.STRING
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

