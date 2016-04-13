function sometimes(func) {
	var count = 0;
	return function newfunc() {
		count++;
		if (count < 4 || count % 2 === 1) {
			return func.apply(null, arguments);
		} else {
			return 'I do not know!';
		}
	}
}