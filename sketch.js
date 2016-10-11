function setup() {
  createCanvas(800,600);

}

function draw() {
  background(255);
  strokeWeight(6);
  stroke(0);

	translate(width/2, height/2);
	
	fill(100,0,0);
	rect(-60,-60,120,120);
	fill(255);
	textSize(50);
	textAlign(CENTER);
	text("B",0,25);
	
	
	fill(100,100,0);
	ellipse(-250,0,-125,-125);
	fill(255);
	textSize(50);
	text("A",-250,25);

	fill(0,100,100);
	triangle(180,60,240,-60,300,60);
	fill(255);
	textSize(50);
	text("C", 240,25);
	
	eraseText();
	
	
}

function keyTyped(){
	fill(150);
	strokeWeight(5);

	if (key === 'a' ){
		textSize(48);
		textAlign(CENTER);
		text("ACCUMULATE POSITIVES",0,-200);
	}
	if (key === 'b' ){
		textSize(48);
		text("BUILDING MASTERY",0,-100);
	}
	if (key === 'c' ){
		textSize(48);
		text("COPING AHEAD",0,150);
	}
}

function eraseText(){
  if (mouseIsPressed) {
   background(255);
}
}
