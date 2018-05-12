module.exports = projectName => ({
  name: projectName,
  version: '1.0.0',
  description: '',
  scripts: {
    build: 'webpack --progress',
    watch: 'webpack --progress --watch',
    prettier: 'prettier --write webpack.config.js "src/**/*.js"',
    'eslint-check': 'eslint --print-config .eslintrc.js | eslint-config-prettier-check',
  },
  keywords: [],
  author: '',
  license: 'UNLICENSED',
  private: true,
  devDependencies: {
    'babel-core': '^6.26.0',
    'babel-eslint': '^8.0.2',
    'babel-loader': '^7.1.2',
    'babel-plugin-transform-class-properties': '^6.24.1',
    'babel-preset-env': '^1.6.1',
    'css-loader': '^0.28.7',
    eslint: '^4.12.1',
    'eslint-config-prettier': '^2.9.0',
    'eslint-config-standard': '^10.2.1',
    'eslint-plugin-import': '^2.8.0',
    'eslint-plugin-node': '^5.2.1',
    'eslint-plugin-promise': '^3.6.0',
    'eslint-plugin-standard': '^3.0.1',
    'exports-loader': '^0.6.4',
    'html-loader': '^0.5.1',
    'node-sass': '^4.7.2',
    prettier: '^1.10.2',
    'sass-loader': '^6.0.6',
    'style-loader': '^0.19.0',
    webpack: '^3.9.1',
  },
  dependencies: {
    'babel-polyfill': '^6.26.0',
    'foundation-sites': '^6.4.4-rc1',
    'kintone-utility': 'https://github.com/kintone/kintoneUtility.git',
    vue: '^2.5.9',
  },
})
