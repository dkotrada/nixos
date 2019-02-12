module.exports = {
  title: "Nix Package Manager",
  description: "Nix Package Manger - User friendly documenation",
  base: "/nixos/",
  themeConfig: {
    navbar: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Deutsch', link: '/de/' },
      { text: 'Contribute', link: 'https://github.com/dkotrada/nixos' },
      {
        text: 'Languages',
        items: [
          { text: 'English', link: '/' },
          { text: 'Deutsch',  link: '/de/' }
        ]
      },
    ],

  }
}
