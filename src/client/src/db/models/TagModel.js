class TagModel {
  table = "tag";

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
      tag: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    };
  }
}

module.exports = TagModel;
