
const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(

  /*
    For more information on addBabelPlugins check out its official github repo at:
    https://github.com/arackaf/customize-cra#addbabelpluginsplugins
  */

  ...addBabelPlugins(
    [
      'module-resolver', 
        {
          root: ["./src"],
          alias: {
            "@": "./src"
          }
        }
    ],
  ),
);