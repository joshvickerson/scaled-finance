export default {
	/**
	 * Returns back some attributes based on whether the
	 * link is active or a parent of an active item
	 *
	 * @param {String} itemUrl The link in question
	 * @param {String} pageUrl The page context
	 * @returns {String} The attributes or empty
	 */
	getLinkActiveState: (itemUrl, pageUrl) => {
		let response = '';
	
		if (itemUrl === pageUrl) {
			response = ' aria-current="page"';
		}
	
		if (itemUrl?.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
			response += ' data-state="active"';
		}
	
		return response;
	},
	
	/**
	* Take an array of keys and return back items that match.
	* Note: items in the collection must have a key attribute in
	* Front Matter
	*
	* @param {Array} collection 11ty collection
	* @param {Array} keys collection of keys
	* @returns {Array} result collection or empty
	*/
	filterCollectionByKeys: (collection, keys) => {
		return collection.filter(x => keys.includes(x.data.key));
	},

	/**
	 * Compares a given date string with "today" to determine if it's a future date or not
	 * @param {String} date - date string to compare with today
	 */
	isFutureDate: (date) => {
		return new Date(date) > new Date();
	},
	
	// generates a random string
	random: () => {
		const segment = () => {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return `${segment()}-${segment()}-${segment()}`;
	}
};
