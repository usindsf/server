module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    SeatNumber: { type: DataTypes.INTEGER, allowNull: false },
    BasePrice: { type: DataTypes.DECIMAL(10,2), allowNull: false, validate: { min: 0 } },
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Hall, { foreignKey: "HallId" });
    Seat.belongsTo(models.Zone, { foreignKey: "ZoneId" });
    Seat.belongsTo(models.Row, { foreignKey: "RowId" });
    Seat.hasOne(models.Ticket, { foreignKey: "SeatId" });
  };

  return Seat;
};
