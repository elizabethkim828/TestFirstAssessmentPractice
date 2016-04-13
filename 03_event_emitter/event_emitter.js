function MyEventEmitter() {
	this.events = {};
}

MyEventEmitter.prototype.addListener = function(event, func) {
	this.events[event] ? this.events[event].push(func) : this.events[event] = [func];
};

MyEventEmitter.prototype.emit = function(event, name) {
	this.events[event].forEach(function(func) {
		return func.apply(this, [name]);
	});
};