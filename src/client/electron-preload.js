const path = require("path");
const { contextBridge } = require("electron");
const { Sequelize, DataTypes } = require("sequelize");
const WorldModel = require("./src/db/models/WorldModel");
const TagModel = require("./src/db/models/TagModel");
const MapModel = require("./src/db/models/MapModel");
const MapCategoryModel = require("./src/db/models/MapCategoryModel");

const dbPath = path.join(__dirname, "src/db/smith.db");
const seqDb = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

// World model definition, accessible from front end side also
const WorldModelInstance = new WorldModel();
const TagModelInstance = new TagModel();
const MapModelInstance = new MapModel();
const MapCategoryModelInstance = new MapCategoryModel();

// Repositories, used for requests
const WorldRepo = seqDb.define(
  WorldModelInstance.table,
  WorldModelInstance.getDefinition(DataTypes),
  {
    freezeTableName: true,
  }
);
const Tag = seqDb.define(
  TagModelInstance.table,
  TagModelInstance.getDefinition(DataTypes),
  { freezeTableName: true, timestamps: false }
);
const MapCategory = seqDb.define(
  MapCategoryModelInstance.table,
  MapCategoryModelInstance.getDefinition(DataTypes),
  {
    freezeTableName: true,
    timestamps: false,
  }
);
const Map = seqDb.define(
  MapModelInstance.table,
  MapModelInstance.getDefinition(DataTypes),
  {
    freezeTableName: true,
  }
);

// relations
// many-to-many: world - tag
WorldRepo.belongsToMany(Tag, {
  through: "worldTag",
  as: "tags",
  timestamps: false,
});
Tag.belongsToMany(WorldRepo, {
  through: "worldTag",
  as: "worlds",
  timestamps: false,
});
// one-to-many: mapCategory - map
MapCategory.hasMany(Map, { as: "maps", foreignKey: "category" });

// API queries
contextBridge.exposeInMainWorld("api", {
  // Model definitions for getting them into the front end part
  models: {
    WorldModel: {
      attributes: WorldModelInstance.getDefinition(),
      associations: Object.keys(WorldRepo.associations),
    },
  },
  initDB: async () => {
    try {
      await seqDb.authenticate();
      await seqDb.sync({ force: true });
      await WorldRepo.create(
        {
          name: "World 1",
          imageURL:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/95c73850815079.58da751bb31b7.jpg",
          tags: [{ tag: "dark-fantasy" }, { tag: "magie" }],
        },
        {
          include: [
            {
              association: "tags",
            },
          ],
        }
      );
      await WorldRepo.create(
        {
          name: "World 2",
          imageURL:
            "https://img.etsystatic.com/il/9056ab/904031544/il_fullxfull.904031544_gx1f.jpg?version=0",
          tags: [
            { tag: "dystopie" },
            { tag: "steampunk" },
            { tag: "futuriste" },
          ],
        },
        { include: [{ association: "tags" }] }
      );
      await WorldRepo.create(
        {
          name: "World 3",
          imageURL:
            "https://www.gamereactor.fr/media/67/plentynewscreenshots_1556763.jpg",
          tags: [{ tag: "random" }, { tag: "ff" }],
        },
        { include: [{ association: "tags" }] }
      );
    } catch (err) {
      console.error(err);
    }
  },
  // Get all worlds that exists
  getAllWorlds: async (extended = [], attributes = [], filters = []) => {
    try {
      await seqDb.authenticate();

      // Array for bad extended values
      const extendedBadValues = [];
      // Array for associations into query
      const associations = [];

      // Check that all extended associations exist
      extended.forEach((extension) => {
        associations.push({ association: extension });
        if (!Object.keys(WorldRepo.associations).includes(extension))
          extendedBadValues.push(extension);
      });
      // If some doesn't exist, send an error with the values in error
      if (extendedBadValues.length > 0)
        throw {
          message: `A World cannot extend these values : ${extendedBadValues.join(
            ","
          )}`,
        };

      // Set the query parameters
      let params = {
        include: associations,
      };

      // final query
      return WorldRepo.findAll(params);
    } catch (err) {
      throw err;
    }
  },
});

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
