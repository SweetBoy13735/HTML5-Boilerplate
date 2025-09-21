// External module imports
const { merge } = require("webpack-merge");

// Internal module imports
const common = require("./webpack.common.js");

// Module exports
module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		liveReload: true,
		hot: true,
		open: true,
		static: ["./public"]
	}
});
