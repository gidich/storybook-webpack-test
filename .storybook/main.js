const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    { 
      name: "@storybook/preset-create-react-app",
      options:{ 
        craOverrides: {
          fileLoaderExcludes: ['less','css']
        }
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "webpackFinal": async (config, { configType }) => {

    config.module.rules.push(
      /*
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer')
                ]
              }
            }
          }
        ],
        include: path.resolve(__dirname, '../src/'),

      },
      */
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: { lessOptions: { javascriptEnabled: true } },
          }
        ],
        include: path.resolve(__dirname, '../src/'),
      }
    );

    // Return the altered config
    return config;
   


  }
}