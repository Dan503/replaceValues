
//A function for surgically replacing values in an object
export default function replaceValues (obj, replacements){
	obj = typeof obj !== 'undefined' ? obj : {};

	for (var property in replacements) {
		if (replacements.hasOwnProperty(property)) {
			if (typeof replacements[property] === 'object' && replacements[property].constructor !== Array){
				obj[property] = replaceValues(obj[property], replacements[property]);
			} else {
				obj[property] = replacements[property];
			}
		}
	}

	return obj;
}
