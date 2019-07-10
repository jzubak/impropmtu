module.exports = function (sequelize, DataTypes) {
  var Destination = sequelize.define("destination", {
    destinationsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    beach: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urban: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hiking: {
      type: DataTypes.STRING,
      allowNull: false
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nightlife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    historic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ski: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quiet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kidfriendly: {
      type: DataTypes.STRING,
      allowNull: false
    },
    airportID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'airports',
        key: 'airportID',
        // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      timestamps: false

    },
    {freezeTableName: true});
  Destination.associate = function (models) {
    Destination.hasMany(Airport)

  };
  // Destination.belongsTo(models.Airport, {
  //   foreignKey: {
  //     allowNull: false
  //   }
  // });

  return Destination;
};

