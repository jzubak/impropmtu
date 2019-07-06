module.exports = function(sequelize, DataTypes) {
    var SearchResult = sequelize.define("SearchResult", {
      Beach: DataTypes.STRING,
      Urban: DataTypes.STRING,
      Hiking: DataTypes.STRING,
      Food: DataTypes.STRING,
      Nightlife: DataTypes.STRING,
      Sports: DataTypes.STRING,
      Music: DataTypes.STRING,
      LaidBack: DataTypes.STRING,
      Ski: DataTypes.STRING
      // Price: DataTypes.INT
    });
    SearchResult.associate = function(models) {
      SearchResult.belongsTo(models.User, {
          foreignKey: {
          allowNull: false
        }
      })
      // SearchResult.belongsTo(models.Users, {  
      //       foreignKey: {
      //       allowNull: false
      //     }
      //   });
      };
      return SearchResult;

  };
  