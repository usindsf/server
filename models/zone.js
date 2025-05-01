module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define("Zone", {
    ZoneName: { type: DataTypes.TEXT, allowNull: false, unique: true },
  });

  Zone.associate = (models) => {
    Zone.hasMany(models.Seat, { foreignKey: "ZoneId" });
  };

  return Zone;
};
