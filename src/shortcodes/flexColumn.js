export default (
	content,
	params
) => {
	// unpack params with defaults
	let id = params?.id || '';
	let classes = params?.classes || '';
	return `<div id="${id}" class="flex-column ${classes}">${ content }</div>`;
}
