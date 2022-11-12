let circleX = 0
let circleY = 400

function setup() {
	createCanvas(800, 800)
	background(0)
}

function mousePressed() {
	circleX = 0
	circleY = 400
}

function draw() {
	noStroke()
	fill(getRandomColor())
	circle(circleX, circleY, 24)
	circleX += 1
	if (Math.floor(Math.random() * 100) % 2 !== 0) {
		circleY += Math.floor(Math.random() * 12)
	} else {
		circleY -= Math.floor(Math.random() * 12)
	}
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
