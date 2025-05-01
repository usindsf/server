module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define("Actor", {
    FullName: { type: DataTypes.TEXT, allowNull: false },
    DateOfBirth: { type: DataTypes.DATE, allowNull: false },
  });

  Actor.associate = (models) => {
    Actor.hasMany(models.PerformanceRole, { foreignKey: "ActorId" });
  };

  return Actor;
};
