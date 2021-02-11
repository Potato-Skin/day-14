class Player {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.width = WIDTH / 10;
    this.height = HEIGHT / 10;
  }

  draw() {
    //  rect(this.x, this.y, this.width, this.height);
    image(pictureVariable, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    // update the y
    this.y -= HEIGHT / 20;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveLeft() {
    this.x -= WIDTH / 20;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveDown() {
    this.y += HEIGHT / 20;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  moveRight() {
    this.x += WIDTH / 20;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }
}
