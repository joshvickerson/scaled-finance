export default (
	content,
	imageSource = "/images/decorative/placeholder.png",
	imageAlt = "A description",
	imageOptions = { location: 'left' }
) => {
	let template = `<section class="text-block-with-image">
		<div class="wrapper" data-image-location="${ imageOptions.location }">
			<div class="text-content">
				${ content }
			</div>
			<div class="image-container">
				<img src="${ imageSource }" alt="${ imageAlt }" />
			</div>
		</div>
	</section>`;

	return template;
}
