const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const now = String(Date.now())
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) { 



    /* Plugins */
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    /* Tailwind */
    eleventyConfig.addWatchTarget('./src/assets/css/tailwind.config.js')
    eleventyConfig.addWatchTarget('./src/assets/css/tailwind.css')

    /* PASSTHROUGHS */
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/favicons");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
    eleventyConfig.addShortcode('version', function () {
        return now
    })

    eleventyConfig.addPassthroughCopy("./src/assets/img");

    eleventyConfig.addFilter(
      "startsWith",
      require("./src/filters/startsWith")
    );

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);



    /* HTML Minifiy */
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (
          process.env.ELEVENTY_PRODUCTION &&
          outputPath &&
          outputPath.endsWith('.html')
        ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
          });
          return minified
        }
    
        return content
    })

    return { 
        dir: { 
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts"
        },
    };
};