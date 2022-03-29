class MapModel {
  table = "map";

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
      imageURL: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      // many-to-one: map -> category
      category: {
        type: DataTypes.INTEGER,
        references: {
          model: "mapCategory",
        },
      },
    };
  }
}

module.exports = MapModel;
