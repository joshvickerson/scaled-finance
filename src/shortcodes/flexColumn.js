export default (
	content,
	params
) => {
	// unpack params with defaults
	let classes = params?.classes || '';
	return `<div class="flex-column ${classes}">${ content }</div>`;
}
