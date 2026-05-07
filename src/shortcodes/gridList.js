export default (
	content,
	params
) => {
	if(!params.contentWrapper) {
		return `<section id="${ params.id }" class="grid-list ${params.classes}">${ content }</section>`;
	} else {
		return `<section id="${ params.id }" class="grid-list ${params.classes}"><div class="wrapper">${ content }</div></section>`;
	}
}
