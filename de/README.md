# Guten Tag

[Home](/) 


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

```json
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/nested/' },
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
      '/de',
      ['/nested', 'Explicit link text']
    ]
    ```