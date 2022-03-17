// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dylan Delbauve',
  icon: './favicon.png',
  templates: {
    StrapiProjects: [
      {
        path: '/projects/project/:id',
        component: './src/templates/Project.vue'
      }
    ]
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/assets/css/main.css',
        shouldImport: true
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['skills', 'projects'],
        singleTypes: [],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
