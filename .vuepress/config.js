module.exports = {
  title: "Nix Package Manager",
  description: "Nix Package Manger - User friendly documenation",
  base: "/nixos/",
  themeConfig: {

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'dkotrada/nixos',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },

      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      },
      {
        text: 'Sprache',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
