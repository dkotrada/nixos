module.exports = {
  title: "Nix Package Manager",
  description: "Nix Package Manager - User friendly documenation",
  base: "/nixos/",
  themeConfig: {
    sidebar: [
      '/',
    ],
    navbar: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Deutsch', link: '/de/' },
      {
        text: 'Languages',
        items: [
          { text: 'English', link: '/' },
          { text: 'Deutsch', link: '/de/' }
        ]
      },
      { text: 'Contribute', link: 'https://github.com/dkotrada/nixos' },
    ]
  }
}
