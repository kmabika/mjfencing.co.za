const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@icons": path.resolve(__dirname, "core/icons"),
        "@core/components": path.resolve(__dirname, "core/common/src/components/"),
        "@utils": path.resolve(__dirname, "core/common/src/utils/"),
        "@static": path.resolve(__dirname, "static")
      }
    }
  });
}