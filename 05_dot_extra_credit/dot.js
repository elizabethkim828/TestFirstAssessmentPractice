function dot(obj, prop) {
	if (obj.hasOwnProperty(prop)) {
		return obj[prop];	
	} else {
		return dot(Object.getPrototypeOf(obj), prop);
	}
}

function dotCall(obj, prop, args) {
	if (typeof dot(obj, prop) !== 'function') {
		throw 'The property "nimit" is not a function';
	} else {
		return dot(obj, prop).apply(obj, [args]);
	}
}