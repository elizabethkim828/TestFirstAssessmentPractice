function MyEventEmitter() {
	this.events = {};
}

MyEventEmitter.prototype.addListener = function(event, func) {
	this.events[event] ? this.events[event].push(func) : this.events[event] = [func];
};

MyEventEmitter.prototype.emit = function(event, name) {
	var args = Array.prototype.slice.call(arguments, 1);
	this.events[event].forEach(function(func) {
		return func.apply(null, args);
	});
};