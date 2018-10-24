const webpack = require("webpack");
const path = require("path");

//Define the Path of Src Directory
const SRC_DIR = path.resolve(__dirname, "src");
//Define the Path of Dist Directory
const DIST_DIR = path.resolve(__dirname, "dist");

const config = {
   //Set up Entry Path
   entry: SRC_DIR + "/app/index.js",

   //Set up Mode to Development
   mode: "development",

   //Set up Output
   output: {
      path: DIST_DIR + "/app",
      filename: "bundle.js",
      publicPath: "/app/"
   },

   //Set up module
   module: {
      rules: [
         {
            test: /\.js?/,
            include: SRC_DIR,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
               presets: ["react", "env", "stage-2"]
            }
         },

         {
            test: /\.css?/,
            loader: "style-loader!css-loader",
         }
      ]
   }

}

module.exports = config;
