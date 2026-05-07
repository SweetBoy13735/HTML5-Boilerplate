//#region External module imports
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const common = require("./webpack.common.js");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const devConfig = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		liveReload: true,
		hot: true,
		static: ["./public"]
	}
};
//#endregion

//#region Module exports
module.exports = merge(common, devConfig);
//#endregion
