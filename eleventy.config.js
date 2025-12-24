import eleventyWebcPlugin from '@11ty/eleventy-plugin-webc';

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ['content/_webc/**/*.webc'],
  });

  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: 'content',
      output: '_site',
      layouts: '_layouts',
    },
  }
};
