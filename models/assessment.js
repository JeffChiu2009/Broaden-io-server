'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assessment = sequelize.define('Assessment', {
    rubricJSON: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Assessment.associate = function(models) {
    
  };

  return Assessment;
};
