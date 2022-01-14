/* @if MODULE=null **
const IdSequence = (() => {
/* @endif */
const counters = {};

function next(prefix = '') {
	if (!counters[prefix]) {
		counters[prefix] = 0;
	}
	return `${prefix}${counters[prefix]++}`;
}

/* @if MODULE="COMMONJS" */
module.exports = { next };
/* @endif */
/* @if MODULE="ES6" **
export { next };
/* @endif */
/* @if MODULE=null **
return { next };
})();

/* exported IdSequence */
/* @endif */
