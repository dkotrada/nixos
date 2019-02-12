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

:: tip
When you instaled nix you also installed `nix-env` utility.
::

`NUF`

The command nix-env is used to manipulate Nix user environments. User environments are sets of software packages available to a
user at some point in time. In other words, they are a synthesised view of the programs available in the Nix store. There may be
many user environments: different users can have different environments, and individual users can switch between different
environments.

## Search if programm is available over nix

1. List all available programs. Type in your terminal.
`NUF`
```sh
nix-env -qa
```

2. Search for specific program. Type in your terminal.
`NUF`
```sh
nix-env -qaP gimp
```


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