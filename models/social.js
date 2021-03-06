'use strict';
module.exports = (sequelize, DataTypes) => {
  const Preview = sequelize.define('Social', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
	},
	rss: {
		type: DataTypes.STRING,
		allowNull: false
	},
	guid: {
		type: DataTypes.STRING
	},
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    epTitle: {
      type: DataTypes.STRING,
    },
    podTitle: {
      type: DataTypes.STRING,
    },
    imgLink: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    audioLink: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    startTime: {
      type: DataTypes.STRING
	},
	duration: {
		type: DataTypes.STRING
	},
    end_timestamp: {
      type: DataTypes.INTEGER
    },
    access_token: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "waiting",
      allowNull: false,
      validate: {
        isIn: [["waiting","during","finished","deleted","error", "canceled"]]
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0
    },
  }, {

  });
  Preview.associate = function(models) {
    // associations can be defined here
  };
  return Preview;
};