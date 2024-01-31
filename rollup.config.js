import peerDepsExternal from "rollup-plugin-peer-deps-external"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import cssnano from 'cssnano'

export default {
  input: "src/index.ts",
  output: [
    {
      file: 'dist/index.js',
      format: "cjs",
      sourcemap: false
    },
    {
      file: 'dist/index.mjs',
      format: "esm",
      sourcemap: false
    }
  ],
  treeshake: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs(),
    postcss({
      plugins: [
        cssnano(),
      ],
    }),
    terser()
  ]
}