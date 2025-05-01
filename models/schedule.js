module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define("Schedule", {
    StartDate: { type: DataTypes.DATE, allowNull: false },
    StartTime: { type: DataTypes.TIME, allowNull: false },
    EndTime: { type: DataTypes.TIME, allowNull: false },
  });

  Schedule.associate = (models) => {
    Schedule.belongsTo(models.Performance, { foreignKey: "PerformanceId" });
    Schedule.belongsTo(models.Hall, { foreignKey: "HallId" });
    Schedule.hasMany(models.Booking, { foreignKey: "ScheduleId" });
  };

  return Schedule;
};
