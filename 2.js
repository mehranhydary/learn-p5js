class Star {
	x
	y
	z

	pz

	constructor() {
		this.x = random(-width, width)
		this.y = random(-height, height)
		this.z = random(width)
	}

	update() {
		this.z = this.z - 10
		if (this.z < 1) {
			this.z = width
			this.x = random(-width, width)
			this.y = random(-height, height)
			this.pz = this.z
		}
	}

	show() {
		fill(255)
		noStroke()
		const sx = map(this.x / this.z, 0, 1, 0, width)
		const sy = map(this.y / this.z, 0, 1, 0, height)
		const r = map(this.z, 0, width, 8, 0)
		ellipse(sx, sy, r, r)
		const px = map(this.x / this.pz, 0, 1, 0, width)
		const py = map(this.y / this.pz, 0, 1, 0, height)
		this.pz = this.z
		stroke(255)
		line(px, py, sx, sy)
	}
}

let stars = []
function setup() {
	createCanvas(800, 800)
	for (let i = 0; i < 400; i++) {
		stars.push(new Star(1, 2))
	}
}

function draw() {
	speed = map(mouseX, 0, width, 0, 20)
	background(0)
	translate(width / 2, height / 2)
	for (let i = 0; i < stars.length; i++) {
		stars[i].update()
		stars[i].show()
	}
}
