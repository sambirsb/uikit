import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import cssnano from 'cssnano'
import terser from '@rollup/plugin-terser'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'esm',
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
		terser({
			compress: false,
		})
	]
}