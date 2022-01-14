"use strict";

var IdSequence = function() {
	var counters = {};

	function next() {
		var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		if (!counters[prefix]) {
			counters[prefix] = 0;
		}

		return "".concat(prefix).concat(counters[prefix]++);
	}

	return {
		next: next
	};
}();
/* exported IdSequence */
