const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config, env) => {
    alias({
      "@components": "./src/components",
      "@base": "./src/components/base",
      "@assets": "./src/assets",
      "@config": "./src/config",
      "@pages": "./src/Pages",
      "@helpers": "./src/helpers",
    })(config);

    return config;
  },
};
