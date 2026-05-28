const getImageAlt = function() {
	const images = document.querySelectorAll('.content-wrapper img');
	const results = [];
	images.forEach((image) => {
		results.push({
			src: image.src,
			alt: image.alt
		});
	});
	
	if(results.length > 0) {
		navigator.clipboard.writeText(JSON.stringify(results));
		console.log("Copied images to clipboard");
	} else {
		console.log('no images found');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const newButton = document.createElement('button');
	newButton.style = "display: none; position: fixed; top: 1rem; right: 1rem; z-index: 1000000;";
	newButton.innerHTML = "Get Images";
	document.body.appendChild(newButton);
	newButton.addEventListener("click", getImageAlt);
});