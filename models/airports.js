module.exports = function(sequalize, DataTypes){
const Airport = sequalize.define("Airport",{
  code: DataTypes.STRING,
  tag1: DataTypes.STRING,
  tag2: DataTypes.STRING,
  tag3: DataTypes.STRING,
  tag4: DataTypes.STRING,
  tag5: DataTypes.STRING,
  tag6: DataTypes.STRING,
  tag7: DataTypes.STRING,
  tag8: DataTypes.STRING,
  tag9: DataTypes.STRING
});

Airport.associate = function(models) {
  Airport.hasMany(models.Searchresult, {

  })
  // Airport.hasMany(models.IMGresult, {

  // })
  Airport.belongsTo(models.Users, {  
      foreignKey: {
      allowNull: false
    }
  });
};
return Airport;

};


