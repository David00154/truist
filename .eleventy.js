module.exports = function (config) {
	config.addLayoutAlias("base", "base.njk");

	config.addPassthroughCopy("src/assets");

	// Asset Watch Targets
	config.addWatchTarget("src/assets");
	return {
		dir: {
			input: "src",
			includes: "includes",
			layouts: "layouts",
			data: "_data",
		},
		templateFormats: ["njk", "md", "11ty.js", "html"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
