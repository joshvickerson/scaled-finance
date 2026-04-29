import path from "node:path";

// Filters
import dateISOString from './src/filters/date-iso-string.js';

// Transforms
import htmlMinTransform from './src/transforms/html-min-transform.js';

// Plugins
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

// Helper functions from global
import helpers from './src/_data/helpers.js';

// Create a helpful production flag
const inProduction = process.env.NODE_ENV === 'production';

export default (config) => {
	config.setQuietMode(inProduction); // use quiet builds in production
	config.addGlobalData('inProduction', inProduction);

	const assetHash = helpers.random();
	config.addGlobalData('assetHash', assetHash);

	// Only minify HTML if we are in production because it slows builds _right_ down
	if (inProduction) {
		config.addTransform('htmlmin', htmlMinTransform);
	}
	
	// Plugins
	config.addPlugin(eleventyNavigationPlugin);
	// optimize images
	config.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpg"],
		filenameFormat: function (id, src, width, format, options) {
			console.log('OPTIMIZING IMAGE FROM SRC: ' + src);
			// Preserve file names for SEO purposes
			const extension = path.extname(src);
			const name = path.basename(src, extension);
			return `${name}-${width}.${format}`;
		}
	});
	
	// Filters
	config.addFilter("dateISOString", dateISOString);
	
	// copy files
	config.addPassthroughCopy('./src/robots.txt');
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/fonts/**');
	config.addPassthroughCopy('./src/js/');

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		}
	}
};
