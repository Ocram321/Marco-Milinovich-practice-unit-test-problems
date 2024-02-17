/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here 
}

function duplicateCharMinCount(string, minCount) {
	// Your code here 
	let dict = {}
	let list = []
	for (let i = 0; i < string.length; i++) {
		if (dict[string[i]] === undefined) {
			dict[string[i]] = 1
		} else {
			dict[string[i]]++
		}
	}
	for (const key in dict) {
		if (dict[key] >= minCount) {
			list.push(key)
		}
	}
	// console.log(list)
	return list;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
