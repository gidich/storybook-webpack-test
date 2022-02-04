const CracoLessPlugin = require('craco-less');

module.exports = {
    
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
        postcssLoaderOptions:
        {
            plugins: [
                require('tailwindcss')('./tailwind.config.js'),
                require('autoprefixer')
            ]
        }
      },
    },
  ],
}