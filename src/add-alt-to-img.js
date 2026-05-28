import { argv } from 'node:process';
import { readFile } from 'fs/promises';
import fs from 'fs';

const args = argv.slice(2);
const filename = args[0];
const imageData = JSON.parse(await readFile(import.meta.dirname + "/images.json", "utf8"));
const filepath = import.meta.dirname + "/insights/" + filename;

fs.readFile(filepath, 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	
	imageData.forEach((image) => {
		let regEx = new RegExp(`alt=""\n\\W+src="${RegExp.escape(image.src)}"`);
		let replacementString = `alt="${image.alt.replaceAll('"', "'")}" src="${image.src}"`;
		data = data.replace(regEx, replacementString);
	});
	

	fs.writeFile(filepath, data, 'utf8', function (err) {
		 if (err) return console.log(err);
	});
});