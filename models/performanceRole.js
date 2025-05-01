module.exports = (sequelize, DataTypes) => {
  const PerformanceRole = sequelize.define("PerformanceRole", {
    RoleName: { type: DataTypes.TEXT, allowNull: false },
  });

  PerformanceRole.associate = (models) => {
    PerformanceRole.belongsTo(models.Actor, { foreignKey: "ActorId" });
    PerformanceRole.belongsTo(models.Performance, { foreignKey: "PerformanceId" });
    PerformanceRole.belongsTo(models.PerformanceRoleType, { foreignKey: "PerformanceRoleTypeId" });
  };

  return PerformanceRole;
};
