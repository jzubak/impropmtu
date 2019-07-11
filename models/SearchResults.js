module.exports = function(sequelize, DataTypes) {
    var SearchResult = sequelize.define("SearchResult", {
      from: DataTypes.STRING,
      depart: DataTypes.STRING,
      return: DataTypes.STRING,
      budget: DataTypes.INTEGER,
      beach: DataTypes.STRING,
      urban: DataTypes.STRING,
      hiking: DataTypes.STRING,
      food: DataTypes.STRING,
      nightlife: DataTypes.STRING,
      historic: DataTypes.STRING,
      ski: DataTypes.STRING,
      quite: DataTypes.STRING,
      kidFriendly: DataTypes.STRING,
      level: DataTypes.INTEGER
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
  