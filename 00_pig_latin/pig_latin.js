function translate(word) {
	var result = [];
	var wordarray = word.split(' ');
	var vowels = 'aeiou';

	for (var i = 0; i < wordarray.length; i++) {
		var store = "";
		for (var j = 0; j < wordarray[i].length; j++) {
			if (vowels.indexOf(wordarray[i][j]) !== -1) {
				if (store[store.length-1] + wordarray[i][j] === 'qu') {
					store += wordarray[i][j];
				} else {
					result.push(wordarray[i].slice(j) + store + 'ay');
					break;
				}
			} else {
				store += wordarray[i][j];
			}
		}
	}
	return result.join(' ');
}