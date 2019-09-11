/*
 * Jupyter Lab extension (labextension) is a standard npm package.
 * It supports both es6 modules and commonjs.
 *
 * Jupyter tools will create the package themselves, by using "npm pack", so it
 * is important to set the "main" field in package.json to the bundle generated
 * for labextension.
 */
module.exports = function ({ project }) {
  return {
    entry: project.src.resolve('labextension/index.tsx'),
    output: {
      path: project.dist.resolve('labextension'),
      filename: 'neptune-notebook.js',
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
    },
    // TODO: probably should be depenand of build mode
    devtool: 'eval-source-map',
  };
};
