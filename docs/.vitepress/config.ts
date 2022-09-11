export default {
  title: 'Season Blog',
  description: 'Chasing the Wind!',

  themeConfig: {
    siteTitle: 'Season Blog',
    logo: '',

    nav: [
      { text: 'Home', link: '/'},
      { text: 'Web', link: '/web/about', activeMenu: '/web'},
      { text: 'Essay', link: '/essay/about', activeMenu: '/essay'},
    ],

    sidebar: {
      '/web/': [
        {
          text: '前端知识总结',
          items: [
            {
              text: "About",
              link: '/web/about',
            }
          ]
        },
        // {
        //   text: 'Rollup',
        //   items: [
        //     { text: 'What is Rollup?', link: '/web/rollup/what-is-rollup' },
        //   ]
        // },
        // {
        //   text: 'Webpack',
        //   items: [
        //     {text: 'What is Webpack', link: '/web/webpack/what-is-webpack' },
        //   ]
        // }
      ],
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/NoCreativeAndNoIdea'}
    ],

    footer: {
      message: 'Chasing the Wind!',
      copyright: 'Copyright © 2022-present Season!'
    }
  }
}
