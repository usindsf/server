module.exports = (sequelize, DataTypes) => {
  const Producer = sequelize.define("Producer", {
    FullName: { type: DataTypes.TEXT, allowNull: false },
    DateOfBirth: { type: DataTypes.DATE, allowNull: false },
  });

  Producer.associate = (models) => {
    Producer.hasMany(models.Performance, { foreignKey: "ProducerId" });
  };

  return Producer;
};
