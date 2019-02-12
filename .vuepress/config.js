module.exports = {
  title: "Nix Package Manager",
  description: "Nix Package Manger - User friendly documenation",
  base: "/nixos/",
  themeConfig: {
    navbar: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Deutsch', link: '/de/' },
      { text: 'External', link: 'https://google.com' },
    ],


    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'dkotrada/nixos',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',



  }
}
