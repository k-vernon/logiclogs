'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.User, { foreignKey: 'authorId', as: 'author' });
      Project.belongsToMany(models.User, {
        through: 'ProjectUser', 
        foreignKey: 'projectId',
        as: 'users',
      });
      Project.hasMany(models.Ticket, { foreignKey: 'projectId' });
    }
  }
  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Open', 'In Progress', 'Closed'),
        allowNull: false,
        defaultValue: 'Open',
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};