class Obstacle {
  constructor(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.width = WIDTH / 10;
    this.height = HEIGHT / 10;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  setRandomPosition() {
    this.x = Math.floor(random(WIDTH - this.width));
    this.y = Math.floor(Math.random() * (HEIGHT - this.height));
  }
}
