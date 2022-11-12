function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	noStroke()
	fill(getRandomColor())
	triangle(
		random(width),
		random(height),
		random(width),
		random(height),
		random(width),
		random(height)
	)
	// circle(x, y, 24)
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
