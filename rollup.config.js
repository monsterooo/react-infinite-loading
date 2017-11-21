import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

const env = process.env.NODE_ENV

const config = {
  entry: 'src/index.js',
  external: [
    'react'
  ],
  globals: {
    'react': 'React'
    //'redux': 'Redux'
  },
  format: 'umd',
  moduleName: 'ReactInfiniteLoading',
  plugins: [
    postcss({extensions: '.css'}),
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
  ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
