let x = 0
var speed = 3
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	stroke(getRandomColor())
	strokeWeight(1)
	noFill()
	// for (let i = 0; i < windowHeight; i += 0.3) {
	ellipse(x, windowHeight / 2, 24, 24)
	// }

	if (x > width || x < 0) {
		speed *= -1
	}
	x += speed
}

function getRandomColor() {
	const colors = [
		'#db4f53',
		'#d12a2f',
		'#e57d33',
		'#fcd365',
		'#fcbd18',
		'#f8b1a1',
		'#dfd7c5',
		'#b8d9cd',
		'#29a691',
		'#121a33',
		'#1f3359',
		'#315f8c',
		'#7ba9bf',
		'#543e2e',
		'#3c2b20',
		'#261c15',
	]

	const color = colors[Math.floor(Math.random() * colors.length)]
	return color
}
