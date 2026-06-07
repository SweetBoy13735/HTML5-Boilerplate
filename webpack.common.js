//#region External module imports
const Path = require("node:path");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const commonConfig = {
	entry: { index: "./public/res/js/index.js" },
	output: {
		filename: "[name].bundle.js",
		path: Path.resolve(__dirname, "dist"),
		clean: true
	}
};
//#endregion

//#region Module exports
module.exports = commonConfig;
//#endregion
