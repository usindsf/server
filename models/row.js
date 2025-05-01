module.exports = (sequelize, DataTypes) => {
  const Row = sequelize.define("Row", {
    RowName: { type: DataTypes.TEXT, allowNull: false },
    PriceMultiplier: { type: DataTypes.DECIMAL(5,2), allowNull: false, validate: { min: 0 } },
  });

  Row.associate = (models) => {
    Row.hasMany(models.Seat, { foreignKey: "RowId" });
  };

  return Row;
};
