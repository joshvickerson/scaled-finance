export default (
	content,
	params
) => {
	return `<section id="${ params.id }" class="grid ${params.classes}">
		<div class="wrapper">${ content }</div>
	</section>`;
}
