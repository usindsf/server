module.exports = (sequelize, DataTypes) => {
  const Hall = sequelize.define("Hall", {
    HallName: { type: DataTypes.TEXT, allowNull: false, unique: true },
  });

  Hall.associate = (models) => {
    Hall.hasMany(models.Schedule, { foreignKey: "HallId" });
    Hall.hasMany(models.Seat, { foreignKey: "HallId" });
  };

  return Hall;
};
