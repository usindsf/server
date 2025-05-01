module.exports = (sequelize, DataTypes) => {
  const PerformanceType = sequelize.define("PerformanceType", {
    TypeName: { type: DataTypes.TEXT, allowNull: false, unique: true },
  });

  PerformanceType.associate = (models) => {
    PerformanceType.hasMany(models.Performance, { foreignKey: "TypeId" });
  };

  return PerformanceType;
};
