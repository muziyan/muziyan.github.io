export default {
  title: 'Season Blog',
  description: 'Chasing the Wind!',

  themeConfig: {
    siteTitle: 'Season Blog',
    logo: '',

    nav: [
      { text: 'Home', link: '/'},
      { text: 'Essay', link: '/essay/index', activeMatch: '/essay'}
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/NoCreativeAndNoIdea'}
    ],

    footer: {
      message: 'Chasing the Wind!',
      copyright: 'Copyright © 2022-present Season!'
    }
  }
}
