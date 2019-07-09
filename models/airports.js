module.exports = function (sequelize, DataTypes) {
  var Airport = sequelize.define("Airport", {
    // airportID: {type: DataTypes.INT,
    // allowNull: false},
    code: {type: DataTypes.STRING,
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


