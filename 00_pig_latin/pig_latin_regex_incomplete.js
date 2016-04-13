function translate(word) {
	var wordarray = word.split(' ');
	var consonantreg = /^[^aeiou]+/
	return wordarray.map(function(w) {
		if (w.match(consonantreg)) {
		var index = (w.match(consonantreg) + "").length;
		return w.slice(index) + w.match(consonantreg) + 'ay';
		} else {
			return w + 'ay';
		}
	}).join(' ');
}