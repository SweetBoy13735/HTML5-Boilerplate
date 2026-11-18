//#region Internal module imports
import { mergeConfig } from "./webpack.common.js";
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const prodConfig = {
	mode: "production",
	devtool: "source-map"
};
//#endregion

//#region Module exports
export default mergeConfig(prodConfig);
//#endregion
