module.exports = function (sequelize, DataTypes) {
  var Airport = sequelize.define("Airport", {
    code: DataTypes.STRING,
    beach: DataTypes.STRING,
    urban: DataTypes.STRING,
    hiking: DataTypes.STRING,
    food: DataTypes.STRING,
    nightlife: DataTypes.STRING,
    historic: DataTypes.STRING,
    ski: DataTypes.STRING,
    quiet: DataTypes.STRING,
    kidfriendly: DataTypes.STRING
  }, {
    timestamps: false
  });

  Airport.associate = function (models) {
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


