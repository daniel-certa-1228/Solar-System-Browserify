"use strict";

var output = {};

output.printToDOM = (element, template) => {
	$(element).append(template);
};

module.exports = output;