module.exports = (sequelize, DataTypes) => {
  const PerformanceRoleType = sequelize.define("PerformanceRoleType", {
    TypeName: { type: DataTypes.TEXT, allowNull: false, unique: true },
  });

  PerformanceRoleType.associate = (models) => {
    PerformanceRoleType.hasMany(models.PerformanceRole, { foreignKey: "PerformanceRoleTypeId" });
  };

  return PerformanceRoleType;
};
