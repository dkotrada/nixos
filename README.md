---
meta:
  - name: Nix Package Manager
    content: Nix Package Manager User Friendly Documentation
  - name: nixpkg, nixos, haskel
    content: Providing best user experience
---

::: tip
This should be a user friendly documentation. 
Sections considered not user friendly are marked with `NUF` key.
:::

# Install nix

1. Run the following in your terminal, then follow the onscreen instructions.

```sh
sh <(curl https://nixos.org/nix/install)
```
2. Check installed version. Type in your terminal.

```sh
nix --version
```

3. Example output of `nix --version` command.

```sh
nix (Nix) 2.2.1
```

# Installing a programm using nix 

[Deutsch](/de/)

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

{{ 1 + 41 }}