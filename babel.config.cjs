//Get error with creating as .js
// export const presets = [
//   ["@babel/preset-env", { targets: { esmodules: true } }],
//   ["@babel/preset-react", { runtime: "automatic" }],
//   "@babel/preset-typescript",
// ];

// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "2",
        targets: { esmodules: true },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString("process");
          },
        },
      };
    },
  ],
};
