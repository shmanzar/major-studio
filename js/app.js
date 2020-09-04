
class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }
  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(1);
    // this.vel.add(this.acc);
    // this.vel.limit(5);
    // this.pos.add(this.vel);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);
  // if(mouseIsPressed) {

  let gravity = createVector(0, 0.7);
  mover.applyForce(gravity);

  let wind = createVector(noise(2,4), 0);
  mover.applyForce(wind);

  // }
  mover.update();
  mover.edges();
  mover.show();
}
