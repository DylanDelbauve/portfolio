// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dylan Delbauve',
  icon: './favicon.png',
  templates: {
    Project: [
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
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // required
        base: process.env.AIRTABLE_BASE_ID, // required
        tables: [
            {
                name: 'Projects', // required
                typeName: 'Project', // required
                select: {}, // optional,
                links: [ // optional

                ]
            },
            {
              name: 'SkillCategories', // required
              typeName: 'SkillCategory', // required
              select: {}, // optional,
              links: [ // optional
                {
                  fieldName: 'Skills',
                  typeName: 'Skill'
                }
              ]
            },
            {
              name: 'Skills', // required
              typeName: 'Skill', // required
              select: {}, // optional,
              links: [ // optional
                {
                  fieldName: 'SkillCategories',
                  typeName: 'SkillCategory'
                }
              ]
            },
        ],
        tableName: 'Projects', // required
      },
    },
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
