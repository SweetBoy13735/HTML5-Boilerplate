//#region External module imports
import Path from "node:path";
import { merge } from "webpack-merge";
//#endregion

//#region Code body
/**
 * Merges the dev./prod. configs with the common base.
 * @param {import("webpack").Configuration} config The config to merge.
 */
function mergeConfig(config) {
	/** @type {import("webpack").Configuration} */
	const commonConfig = {
		entry: "./public/index.html",
		output: {
			copy: [{ from: "./public/404.html" }, { from: "./public/robots.txt" }],
			htmlFilename: "[name].html",
			cssFilename: "res/css/[name].css",
			filename: "res/js/[name].bundle.js",
			assetModuleFilename: pathData => pathData.filename.substring("public/".length),
			path: Path.resolve(import.meta.dirname, "../dist"),
			clean: true
		}
	};

	return merge(commonConfig, config);
}
//#endregion

//#region Module exports
export { mergeConfig };
//#endregion
