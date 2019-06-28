module.exports = function(sequelize, DataTypes) {
    var Desination = sequelize.define("Destation", {
        Option1: DataTypes.INTEGER,
        Option2: DataTypes.INTEGER,
        Option3: DataTypes.INTEGER,
        Option4: DataTypes.INTEGER,
        Option5: DataTypes.INTEGER,
        Option6: DataTypes.INTEGER,
        Option7: DataTypes.INTEGER,
        Option8: DataTypes.INTEGER
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