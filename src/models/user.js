"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Allcode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      });
      Users.belongsTo(models.Allcode, {
        foreignKey: "gender",
        targetKey: "keyMap",
        as: "genderData",
      });
      Users.hasOne(models.Markdown, { foreignKey: "doctorId" });
      Users.hasOne(models.Doctor_Infor, { foreignKey: "doctorId" });
      Users.hasMany(models.Schedule, {
        foreignKey: "doctorId",
        as: "doctorData",
      });
      Users.hasMany(models.History, {
        foreignKey: "doctorId",
        as: "doctorDataHistory",
      });
      Users.hasMany(models.Booking, {
        foreignKey: "patientId",
        as: "patientData",
      });
      Users.hasMany(models.Invoice, {
        foreignKey: "doctorId",
        as: "doctorDataInvoice",
      });
      Users.hasMany(models.Invoice, {
        foreignKey: "patientId",
        as: "patientDataInvoice",
      });
    }
  }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.TEXT,
      roleId: DataTypes.STRING,
      positionId: DataTypes.STRING,
      // tokenUser: DataTypes.STRING,
      // totalCost: DataTypes.INTEGER,
      // totalRevenue: DataTypes.INTEGER,
      status: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
