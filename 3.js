// Constants
const Y_AXIS = 1
const X_AXIS = 2

class Star {
	x
	y

	constructor() {
		this.x = random(-width / 2, width / 2)
		this.y = random(-height / 2, height / 2)
	}

	update() {
		this.x = random(-width / 2, width / 2)
		this.y = random(-height / 2, height / 2)
	}

	show() {
		const color1 = getRandomColor()
		const color2 = getRandomColor()
		createColoredRectangles(
			this.x,
			this.y,
			10,
			10,
			color(`#${parseInt(color1, 16).toString(16).padStart(6, '0')}`),
			color(`#${parseInt(color2, 16).toString(16).padStart(6, '0')}`)
		)
	}
}

let stars = []

function setup() {
	createCanvas(800, 800)
	for (let i = 0; i < 400; i++) {
		stars.push(new Star())
	}
}

function draw() {
	// background(0)
	translate(width / 2, height / 2)
	for (let i = 0; i < stars.length; i++) {
		stars[i].show()
		stars[i].update()
	}
}

function createColoredRectangles(x, y, w, l, c1, c2) {
	setGradient(x, y, w, l, c1, c2, Y_AXIS)
	noStroke()
	rect(x, y, w, l)
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
