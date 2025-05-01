module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    TotalPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false, validate: { min: 0 } },
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.Order, { foreignKey: "OrderId" });
    Sale.belongsTo(models.Ticket, { foreignKey: "TicketId" });
  };

  return Sale;
};
