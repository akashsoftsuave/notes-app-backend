const { DataTypes } = require('sequelize');
const sequelize = require('../confic/db');

const Notes = sequelize.define('Notes', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isDeleted:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    pin:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    archive:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
},{
        tableName: 'notes_data',
        timestamps: true
    });

module.exports = Notes;