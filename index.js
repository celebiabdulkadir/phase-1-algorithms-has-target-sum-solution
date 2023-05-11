function hasTargetSum(numbers, targetSum) {
	// Create a set to store the numbers we've seen so far
	const seenNumbers = new Set();

	// Iterate over the array
	for (const number of numbers) {
		// Calculate the number we need to find in the set to know if we've found a pair that sums to targetSum
		const neededNumber = targetSum - number;

		// If we've seen the needed number, then we've found a pair that sums to targetSum
		if (seenNumbers.has(neededNumber)) {
			return true;
		}

		// Add the current number to the set of seen numbers
		seenNumbers.add(number);
	}

	// If we've gone through the entire array and haven't found a pair that sums to targetSum, return false
	return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log('Expecting: true');
	console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

	console.log('');

	console.log('Expecting: true');
	console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

	console.log('');

	console.log('Expecting: false');
	console.log('=>', hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
