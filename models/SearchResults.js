module.exports = function(sequelize, DataTypes) {
    var SearchResult = sequelize.define("SearchResult", {
      beach: DataTypes.STRING,
      urban: DataTypes.STRING,
      iking: DataTypes.STRING,
      food: DataTypes.STRING,
      nightlife: DataTypes.STRING,
      sports: DataTypes.STRING,
      music: DataTypes.STRING,
      laidBack: DataTypes.STRING,
      ski: DataTypes.STRING
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
  