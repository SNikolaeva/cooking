"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Recipe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Likelist}) {
          this.hasMany(Likelist, { foreignKey: 'recipe_id' });
        }
    }
    Recipe.init(
        {
            title: DataTypes.STRING,
            image: DataTypes.TEXT,
            ingredients: DataTypes.TEXT,
            time: DataTypes.STRING,
            body: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Recipe",
        }
    );
    return Recipe;
};
