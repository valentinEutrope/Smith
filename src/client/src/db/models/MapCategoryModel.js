class MapCategoryModel {
  table = "mapCategory";

  getDefinition(
    DataTypes = {
      INTEGER: "integer",
      STRING: "string",
      TEXT: "text",
    }
  ) {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
    };
  }
}

module.exports = MapCategoryModel;
