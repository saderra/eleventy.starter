const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) { 

    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Passthroughts
    eleventyConfig.addPassthroughCopy ("./src/assets");

    return { 
        dir: { 
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts"
        },
    };
};