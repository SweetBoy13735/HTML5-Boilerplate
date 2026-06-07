//#region External module imports
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const Common = require("./webpack.common.js");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const prodConfig = {
	mode: "production",
	devtool: "source-map",
	plugins: [new HTMLWebpackPlugin({ template: "./public/index.html" }), new CopyWebpackPlugin({ patterns: [
				{ from: "./public/404.html", to: "404.html" },
				{ from: "./public/favicon.ico", to: "favicon.ico" },
				{ from: "./public/site.webmanifest", to: "site.webmanifest" },
				{ from: "./public/robots.txt", to: "robots.txt" },
				{ from: "./public/res/css", to: "res/css" },
				{ from: "./public/res/js/vendor", to: "res/js/vendor" },
				{ from: "./public/res/assets", to: "res/assets" }
	] })]
};
//#endregion

//#region Module exports
module.exports = merge(Common, prodConfig);
//#endregion
