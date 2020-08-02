const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
}

// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer(babelOptions)
