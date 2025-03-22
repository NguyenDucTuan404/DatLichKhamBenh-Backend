"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Bookings", // table name
        "patientName", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Bookings", // table name
        "patientPhoneNumber", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Bookings", // table name
        "patientAddress", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Bookings", // table name
        "patientReason", // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Bookings", // table name
        "patientGender", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Bookings", // table name
        "patientBirthday", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Bookings", "patientName"),
      queryInterface.removeColumn("Bookings", "patientPhoneNumber"),
      queryInterface.removeColumn("Bookings", "patientAddress"),
      queryInterface.removeColumn("Bookings", "patientReason"),
      queryInterface.removeColumn("Bookings", "patientGender"),
      queryInterface.removeColumn("Bookings", "patientBirthday")
    ]);
  },
};
