const fs = require('fs');

const getFile = () => {
	try {
		let dataFileJson = fs.readFileSync('/tmp/data.json');
		let dataFile = JSON.parse(dataFileJson);
		return dataFile;
	} catch (err) {
		return {};
	}
}

exports.handler = async (event) => {
	let body = JSON.parse(event.body);

	if (body.readData) {
		let dataFile = getFile();

		return {
			statusCode: 200,
			body: JSON.stringify(dataFile)
		}
	} else if (body.saveData) {
		let dataFile = getFile();

		let randomID = Math.round(Math.random() * 10000);
		dataFile[randomID] = 'Saved';

		fs.writeFileSync('/tmp/data.json', JSON.stringify(dataFile));

		return {
			statusCode: 200,
			body: JSON.stringify(dataFile)
		}
	}

}