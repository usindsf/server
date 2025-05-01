module.exports = (sequelize, DataTypes) => {
  const Performance = sequelize.define("Performance", {
    Title: { type: DataTypes.TEXT, allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: false },
  });

  Performance.associate = (models) => {
    Performance.belongsTo(models.PerformanceType, { foreignKey: "TypeId" });
    Performance.belongsTo(models.Producer, { foreignKey: "ProducerId" });
    Performance.hasMany(models.Schedule, { foreignKey: "PerformanceId" });
    Performance.hasMany(models.PerformanceRole, { foreignKey: "PerformanceId" });
  };

  return Performance;
};
