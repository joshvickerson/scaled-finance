let readableDate = (value) => {
	let postDate = new Date(value);
	console.log(postDate);
	return postDate.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	});
};

let w3DateFilter = (value) => {
	return new Date(value).toISOString();
};


export { readableDate, w3DateFilter }
