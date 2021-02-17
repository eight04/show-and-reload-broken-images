import { terser } from 'rollup-plugin-terser';
import re from "rollup-plugin-re";
import userscriptMeta from "userscript-meta-cli";

const BOOKMARK = process.env.BUILD === "bookmarklet";

export default {
	input: 'src/index.js',
	output: {
		sourcemap: false,
		format: 'esm',
		file: 'show-and-reload-broken-images.user.js',
    banner: BOOKMARK ? undefined : userscriptMeta.stringify(userscriptMeta.getMeta())
	},
	plugins: [
    re({
      replaces: Object.fromEntries(listEnv())
    }),
		BOOKMARK && terser(),
	]
};

function* listEnv() {
  for (const key in process.env) {
    yield [`process.env.${key}`, JSON.stringify(process.env[key])];
  }
}
