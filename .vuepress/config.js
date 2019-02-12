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
          { text: 'English', items: [{ text: 'Home', link: '/' }] },
          { text: 'Russian', items: [{ text: 'Home', link: '/' }] },
          { text: 'Deutsch',  link: '/de/' }
        ]
      },
    ],

  }
}
