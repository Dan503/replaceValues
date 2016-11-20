'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = replaceValues;

//A function for surgically replacing values in an object
function replaceValues(obj, replacements) {
	obj = typeof obj !== 'undefined' ? obj : {};

	for (var property in replacements) {
		if (replacements.hasOwnProperty(property)) {
			if (_typeof(replacements[property]) === 'object' && replacements[property].constructor !== Array) {
				obj[property] = replaceValues(obj[property], replacements[property]);
			} else {
				obj[property] = replacements[property];
			}
		}
	}

	return obj;
}