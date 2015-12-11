"use strict";

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("seo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                isInt: {
                    msg: 'ID must be an integer'
                }
            }
        },
        key: DataTypes.STRING,
        value: DataTypes.TEXT
    }, {
        tableName: 'arr_seo',
        timestamps: false
    });
};
