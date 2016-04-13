function difference(array1, array2) {
	var result = [];
	array1.forEach(function(i) {
		if (array2.indexOf(i) === -1) {
			result.push(i);
		}
	})
	return result;
}

function symmetricDiff(array1, array2) {
	var result = [];
	result.push(difference(array1, array2));
	result.push(difference(array2, array1));
	return result.reduce(function(a, b) {return a.concat(b);});
}