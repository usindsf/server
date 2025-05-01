module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    Username: { type: DataTypes.TEXT, allowNull: false, unique: true },
    Name: { type: DataTypes.TEXT, allowNull: false },
    Surname: { type: DataTypes.TEXT, allowNull: false },
    Email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    Phone: { type: DataTypes.TEXT, allowNull: false },
    PasswordHash: { type: DataTypes.TEXT, allowNull: false },
    Role: { type: DataTypes.TEXT, allowNull: false },
  });

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: "UserId" });
  };

  return User;
};
