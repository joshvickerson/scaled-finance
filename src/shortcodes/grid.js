export default (
	content,
	params
) => {
	// unpack params with defaults
	let id = params?.id || '';
	let classes = params?.classes || '';
	return `<section id="${ id }" class="grid ${classes}">
		<div class="wrapper">${ content }</div>
	</section>`;
}
