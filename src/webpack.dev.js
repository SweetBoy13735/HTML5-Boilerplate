//#region Internal module imports
import { mergeConfig } from "./webpack.common.js";
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const devConfig = {
	mode: "development",
	devServer: {
		static: "../public",
		hot: true,
		liveReload: true
	}, devtool: "inline-source-map"
};
//#endregion

//#region Module exports
export default mergeConfig(devConfig);
//#endregion
