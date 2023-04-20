const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Likelist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Recipe }) {
      this.belongsTo(Recipe, { foreignKey: 'recipe_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Likelist.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Likelist',
  });
  return Likelist;
};
