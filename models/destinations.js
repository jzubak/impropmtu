module.exports = function(sequelize, DataTypes) {
    var Desination = sequelize.define("Destation", {
        Option1: DataTypes.STRING,
        Option2: DataTypes.STRING,
        Option3: DataTypes.STRING,
        Option4: DataTypes.STRING,
        Option5: DataTypes.STRING,
        Option6: DataTypes.STRING,
        Option7: DataTypes.STRING,
        Option8: DataTypes.STRING
        });
    Destination.associate = function(models) {
        Destination.hasMany(models.SearchResult, {

        })
        Desination.hasMany(models.IMGresult, {

        })
        Destination.belongsTo(models.Airport, {  
            foreignKey: {
            allowNull: false
          }
        });
      };
      return Destination;

  };

