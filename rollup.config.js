import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "lib/src/index.js",
  output: [
    {
      file: "dist/micromodal.min.mjs",
      format: "es",
      plugins: [
        commonjs({
          transformMixedEsModules: true,
        }),
        nodeResolve(),
        terser(),
      ],
    },
    {
      file: "dist/micromodal.mjs",
      format: "es",
      plugins: [
        commonjs({
          transformMixedEsModules: true,
        }),
        nodeResolve(),
      ],
    },
    {
      file: "dist/micromodal.js",
      format: "umd",
      name: "MicroModal",
      plugins: [
        commonjs({
          transformMixedEsModules: true,
        }),
        nodeResolve(),
      ],
    },
    {
      file: "dist/micromodal.min.js",
      format: "umd",
      name: "MicroModal",
      plugins: [
        commonjs({
          transformMixedEsModules: true,
        }),
        nodeResolve(),
        terser(),
      ],
    },
  ],
};
