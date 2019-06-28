module.exports = function(sequelize, DataTypes) {
    var SearchResult = sequelize.define("URLresult", {
        0: DataTypes.STRING,
        1: DataTypes.STRING,
        2: DataTypes.STRING,
        3: DataTypes.STRING,
        4: DataTypes.STRING,
        5: DataTypes.STRING,
        6: DataTypes.STRING,
        7: DataTypes.STRING,
        8: DataTypes.STRING,        
        9: DataTypes.STRING  
    });
    SearchResult.associate = function(models) {
      SearchResult.belongsTo(models.User, {
          foreignKey: {
          allowNull: false
        }
      })
      SearchResult.belongsTo(models.destinations, {  
            foreignKey: {
            allowNull: false
          }
        });
      };
      return SearchResult;

  };
  