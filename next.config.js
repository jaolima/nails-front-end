const withImages = require("next-images");
const { withPlugins } = require("next-compose-plugins");

const nextConfig = {
  env: {
    API_URL: "https://multikart-graphql-dun.vercel.app/server.js",
    REACT_APP_STAGE: "http://65.21.146.141:3333/",
  },

  // if you want to run with local graphQl un-comment below one and comment the above code
  // env: {
  //   API_URL: "http://localhost:4000/graphql",
  // },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withPlugins([withImages], nextConfig);
