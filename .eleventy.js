import path from "node:path";

// Filters
import { readableDate, w3DateFilter } from './src/filters/dateFilters.js';

// Transforms
import htmlMinTransform from './src/transforms/html-min-transform.js';

// Plugins
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

// Helper functions from global
import helpers from './src/_data/helpers.js';

// Shortcodes
import flexColumn from './src/shortcodes/flexColumn.js';
import grid from './src/shortcodes/grid.js';
import gridListItem from './src/shortcodes/gridListItem.js';
import textBlockWithImage from './src/shortcodes/textBlockWithImage.js';

// Create a helpful production flag
const inProduction = process.env.NODE_ENV === 'production';
const imageOptimizationFormats = ["webp", "jpg"];
const assetHash = helpers.random();

export default (config) => {
	/** =================================
	 * Global Config Options
	 ** ===============================*/
	config.setQuietMode(inProduction);
	config.addGlobalData('inProduction', inProduction);
	config.addGlobalData('assetHash', assetHash);

	// Only minify HTML in production
	if (inProduction) {
		config.addTransform('htmlmin', htmlMinTransform);
	}
	
	/** =================================
	 * Filters
	 ** ===============================*/
	config.addFilter('readableDate', readableDate);
	config.addFilter('w3DateFilter', w3DateFilter);
	
	/** =================================
	 * Plugins
	 ** ===============================*/
	config.addPlugin(eleventyNavigationPlugin);
	config.addPlugin(eleventyImageTransformPlugin, {
		formats: imageOptimizationFormats,
		filenameFormat: function (id, src, width, format, options) {
			// Preserve file names for SEO purposes
			const extension = path.extname(src);
			const name = path.basename(src, extension);
			return `${name}-${width}.${format}`;
		}
	});

	/** =================================
	 * Shortcodes
	 ** ===============================*/
	config.addPairedShortcode('flexColumn', flexColumn);
	config.addPairedShortcode('grid', grid);
	config.addPairedShortcode('gridListItem', gridListItem);
	config.addPairedShortcode('textBlockWithImage', textBlockWithImage);
	
	/** =================================
	 * Files to Copy
	 ** ===============================*/
	config.addPassthroughCopy('./src/downloads/');
	config.addPassthroughCopy('./src/robots.txt');
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/fonts/**');
	config.addPassthroughCopy('./src/js/');
	
	/** =================================
	 * Content Collections
	 ** ===============================*/
	
	// Returns a collection of blog posts in reverse date order
	config.addCollection('blog', collection => {
		return [...collection.getFilteredByGlob('./src/insights/**/*.html')].reverse();
	});

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
