module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    FinalPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false, validate: { min: 0 } },
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Seat, { foreignKey: "SeatId" });
    Ticket.hasMany(models.Booking, { foreignKey: "TicketId" });
    Ticket.hasMany(models.Sale, { foreignKey: "TicketId" });
  };

  return Ticket;
};
