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
	ellipse(circleX, circleY, 48)
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

	const moreColors = [
		// Miami
		// '#e0e0e0',
		// '#f2bdc6',
		// '#4e9fd9',
		// '#89cdf0',
		// '#efb96d',
		// '#f2d055',
		// '#96d8d9',
		// '#7670ba',
		// Seoul
		// '#8193a6',
		// '#516d94',
		// '#343e4c',
		// '#d47985',
		// '#cc959c',
		// '#c8bfb3',
		// '#94798b',
		// '#39394d',
		// '#102540',
		// Scotland
		// '#f4f2eb',
		// '#f29991',
		// '#de361b',
		// '#385766',
		// '#594a3a',
		// '#de4c1b',
		// '#f08519',
		// '#f7b919',
		// '#fabf3e',
		// '#1f403a',
		// '#23593e',
		// Rainbow
		'#9400D3',
		'#0000FF',
		'#00FF00',
		'#FFFF00',
		'#FF7F00',
		'#FF0000',
	]

	const color = colors[Math.floor(Math.random() * colors.length)]
	return color
	// const otherColor = moreColors[Math.floor(Math.random() * moreColors.length)]
	// return otherColor
}
