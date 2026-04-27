import eleventyWebcPlugin from '@11ty/eleventy-plugin-webc';
import markdownIt from "markdown-it";

const mdOptions = {
  html: true,
  breaks: false,
  linkify: true,
};

const md = markdownIt(mdOptions);

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ['content/_webc/**/*.webc'],
  });

  eleventyConfig.addPreprocessor("webMD", "webc", (data, content) => {
    return (data.md)
      ? md.render(content || '')
      : content;
  });

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: 'content',
      output: '_site',
      layouts: '_layouts',
    },
  }
};
