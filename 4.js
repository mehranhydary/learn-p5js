function setup() {
	createCanvas(400, 400)
	noLoop()
}

function draw() {
	background(220)
	addRectangle(
		CENTER,
		getRandomColor(),
		getRandomColor(),
		true,
		true,
		1,
		200,
		200,
		40,
		40
	)

	addEllipse(
		CORNER,
		getRandomColor(),
		getRandomColor(),
		true,
		true,
		1,
		0,
		0,
		40,
		40
	)
}

function addRectangle(
	mode,
	fillColor,
	strokeColor,
	fillFlag,
	strokeFlag,
	weight,
	x,
	y,
	w,
	l
) {
	// CORNER, RADIUS, CENTER
	!strokeFlag ? noStroke() : stroke(strokeColor)
	!fillFlag ? noFill() : fill(fillColor)
	strokeWeight(weight)
	rectMode(mode) // Takes the <> of the shape and uses that as x and y (e.g. instead of corner, use center)
	rect(x, y, w, l)
}

function addEllipse(
	mode,
	fillColor,
	strokeColor,
	fillFlag,
	strokeFlag,
	weight,
	x,
	y,
	w,
	h
) {
	!strokeFlag ? noStroke() : stroke(strokeColor)
	!fillFlag ? noFill() : fill(fillColor)
	strokeWeight(weight)
	ellipseMode(mode)
	ellipse(x, y, w, h)
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'
	var color = '#'
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
