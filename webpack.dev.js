//#region External module imports
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const Common = require("./webpack.common.js");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const devConfig = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./public",
		hot: true,
		liveReload: true
	}
};
//#endregion

//#region Module exports
module.exports = merge(Common, devConfig);
//#endregion
