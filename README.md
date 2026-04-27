# Here's the issue

It's very cool that markdown allows HTML,
and webc is _almost just_ HTML.
So webc _almost just_ works in Markdown.

There are a few gotcha's
using custom elements in markdown,
but once you get through those
there's a difficult eleventy/webc issue to solve:

- It's not a good idea to use `webc` as the markdown template engine
  for various reasons. So the only solution is rendering `webc`
  at the layout level.
- But then any page data is only available when rendering _that page_,
  and any `webc` components relying on page data fail
  once we put that content in a loop or in pagination.

**Solved**: I'm using markdown
as a [preprocessor](https://www.11ty.dev/docs/config-preprocessors/)
for `webC` templates.

```js
eleventyConfig.addPreprocessor("webMD", "webc",
  (data, content) => {
    return (data.md)
      ? md.render(content || '')
      : content;
  });
```
