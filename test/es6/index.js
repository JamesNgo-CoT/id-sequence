/* global IdSequence */

const { next } = IdSequence;

console.group('No Prefix');
console.log(next());
console.log(next());
console.log(next());
console.groupEnd();

console.group('With Prefix');
console.log(next('prefix-'));
console.log(next('prefix-'));
console.log(next('prefix-'));
console.groupEnd();
