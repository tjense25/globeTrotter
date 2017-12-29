var pi = Math.PI;

function Platform(x, y, r, start, end) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.start = start;
	this.end = end;
	this.globe_start = 4.7123 - this.start + 0.05;
	this.globe_end = this.globe_start - (this.end - this.start) - 0.02;
	this.height = 840 - this.r;
	console.log(this.height);
}

Platform.prototype = {
	constructor: Platform,
	inRange: function(globe_angle) {
		if (globe_angle < this.globe_start && globe_angle > this.globe_end) return true;
		return false;
	},
	update: function() {
		ctx = myGameArea.context;
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(globe.angle);
		ctx.lineWidth = 15;
		ctx.strokeStyle = "white";
		ctx.beginPath();
		ctx.arc(0, 0, this.r, this.start, this.end);
		ctx.stroke();
		ctx.restore();
	}
}
	

	
	


