module.exports = function (sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    cityName: {type: DataTypes.STRING,
    allowNull: false},
    beach: {type: DataTypes.STRING,
      allowNull: false},
    urban: {type: DataTypes.STRING,
    allowNull: false},
    hiking: {type: DataTypes.STRING,
    allowNull: false},
    food: {type: DataTypes.STRING,
    allowNull: false},
    nightlife: {type: DataTypes.STRING,
    allowNull: false},
    historic: {type: DataTypes.STRING,
    allowNull: false},
    ski: {type: DataTypes.STRING,
    allowNull: false},
    quiet: {type: DataTypes.STRING,
    allowNull: false},
    kidfriendly: {type: DataTypes.STRING,
    allowNull: false}
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

