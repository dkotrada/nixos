---
meta:
  - name: Nix Package Manager
    content: Nix Package Manager User Friendly Documentation
  - name: nixpkg, nixos, haskel
    content: Providing best user experience
---

::: tip Note
This should be a user friendly documentation. 
Sections considered not user friendly are marked with `NUF` key.
:::

# Install nix

::: tip Supported Platforms
Linux i686, x86_64, aarch64
macOS x86_64
:::

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

::: tip Note
When you instaled nix you also installed `nix-env` utility.
:::

`NUF`

The command `nix-env` is used to manage Nix user environments. User environments are sets of software packages available to a
user. In other words, they are a synthesised view of the programs available in the Nix store. 

There may be many user environments: different users can have different environments, and individual users can switch between different
environments.

## Search if programm is available in `nix store`

1. List all available programs. Type in your terminal.
`NUF`
```sh
nix-env -qa
```

2. Search for specific program.
`NUF`
```sh
nix-env -qaP gimp
```

## Install example program. Hello World. 


```sh
nix-env -i hello
```
Test installed program. It should print `Hello World` in your Terminal.

```sh
hello
```

## Uninstall program.

```sh
nix-env -e hello
```
