export default (
	content,
	id,
	imageSource = "/images/decorative/placeholder.png",
	imageAlt = "A description",
	imageOptions = { location: 'left' }
) => {
	let template = `<section id="${ id }" class="text-block-with-image" data-image-location="${ imageOptions.location }">
		<div class="text-content flow">${ content }</div>
		<div class="image-container"><img src="${ imageSource }" alt="${ imageAlt }" /></div>
	</section>`;

	return template;
}
