module.exports = (sequelize, DataTypes) => {
  const Performance = sequelize.define("Performance", {
    Title: { type: DataTypes.TEXT, allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: false },
  });

  return Performance;
};
