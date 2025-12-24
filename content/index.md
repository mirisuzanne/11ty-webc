---
layout: base
gallery:
- img: example/first.jpg
  alt: We don't need to actually use images here
- img: example/second.jpg
  alt: Using page-specific data is all that matters
- img: example/third.jpg
  alt: In order to demonstrate this issue
- img: example/fourth.jpg
  alt: The media gallery concept is just one use-case
tags: example
---

# This is a markdown file

The first issue is that components
with private `@`-prefixed attributes
aren't recognized as HTML…

<media-gallery :@from-data="this.gallery"></media-gallery>

Removing the `@` sign,
the component is rendered --
but inside a paragraph!
That's a markdown issue.
It happens with all inline-default elements:

<media-gallery :from-data="this.gallery"></media-gallery>

<my-element>this is &lt;my-element&gt; wrapped in a paragraph</my-element>

<span>it does the same with a &lt;span&gt; or other inline HTML</span>

INSTEAD, we can wrap our webc
in a `<figure>` to get the desired output.
Markdown-it knows this is block-level HTML,
and it's not wrapped:

<figure>
  <media-gallery :@from-data="this.gallery"></media-gallery>
</figure>

This page has to be parsed as `md` and not `webc,md` --
because we need markdown to escape characters in a code-block
before webc gets ahold of it:

```html
<!-- this is a code block and should not render -->
<figure>
  <media-gallery :@from-data="this.gallery"></media-gallery>
</figure>
```

It all works great!
Until we access this same page
inside a [loop](/loop/),
there's no `gallery` data anyway!
