const counters = {};

function next(prefix = '') {
	if (!counters[prefix]) {
		counters[prefix] = 0;
	}
	return `${prefix}${counters[prefix]++}`;
}

export { next };
