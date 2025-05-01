module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {});

  Booking.associate = (models) => {
    Booking.belongsTo(models.Schedule, { foreignKey: "ScheduleId" });
    Booking.belongsTo(models.Order, { foreignKey: "OrderId" });
    Booking.belongsTo(models.Ticket, { foreignKey: "TicketId" });
  };

  return Booking;
};
