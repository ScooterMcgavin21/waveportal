
   
const plugins = [["babel-plugin-styled-components"],["@babel/transform-runtime"]];
module.exports = {
  presets: [
    '@babel/preset-env',
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins
}
