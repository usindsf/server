module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    Status: { type: DataTypes.TEXT, allowNull: false },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "UserId" });
    Order.hasMany(models.Booking, { foreignKey: "OrderId" });
    Order.hasMany(models.Sale, { foreignKey: "OrderId" });
  };

  return Order;
};
