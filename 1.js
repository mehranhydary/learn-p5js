// Constants
const Y_AXIS = 1
const X_AXIS = 2

function setup() {
	createCanvas(800, 800)
	noLoop()
}

function draw() {
	background(220)
	for (i = -800; i < 800; i += 8) {
		createRow(25, 25, 25, i)
	}
}

function createRow(w, l, counter, randomizer) {
	const color1 = getRandomColor()
	const color2 = getRandomColor()
	for (let i = 0; i < 800; i += counter) {
		createColoredRectangles(
			i + randomizer,
			i - randomizer,
			w,
			l,
			color(
				`#${(parseInt(color1, 16) + i).toString(16).padStart(6, '0')}`
			),
			color(
				`#${(parseInt(color2, 16) + i).toString(16).padStart(6, '0')}`
			),
			Math.random(),
			Math.floor(Math.random() * 4) + 1,
			Math.floor(Math.random() * 8) + 1,
			Math.floor(Math.random() * 8) + 1,
			Math.floor(Math.random() * 8) + 1,
			Math.floor(Math.random() * 8) + 1
		)
	}
}

function createColoredRectangles(x, y, w, l, c1, c2, sx, sy, tl, tr, br, bl) {
	console.log(tl, tr, br, bl)
	setGradient(x, y, w / sx, l * sy, c1, c2, Y_AXIS)
	rect(x, y, w / sx, l * sy, tl, tr, br, bl)
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'
	var color = '0x'
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

function setGradient(x, y, w, h, c1, c2, axis) {
	noFill()

	if (axis === Y_AXIS) {
		// Top to bottom gradient
		for (let i = y; i <= y + h; i++) {
			let inter = map(i, y, y + h, 0, 1)
			let c = lerpColor(c1, c2, inter)
			stroke(c)
			line(x, i, x + w, i)
		}
	} else if (axis === X_AXIS) {
		// Left to right gradient
		for (let i = x; i <= x + w; i++) {
			let inter = map(i, x, x + w, 0, 1)
			let c = lerpColor(c1, c2, inter)
			stroke(c)
			line(i, y, i, y + h)
		}
	}
}
