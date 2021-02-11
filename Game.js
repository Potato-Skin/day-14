class Game {
  constructor() {
    this.player = new Player(250, 250);
  }

  draw() {
    clear();
    background("orange");
    this.player.draw();
  }

  keyPressed() {
    console.log("KEY PRESSED", keyCode);
    //  if arrowup //38 UP
    //  40 DOWN
    // 37 LEFT
    // this.player.moveUp()
    if (keyCode === 38) {
      this.player.moveUp();
    }
    if (keyCode === 37) {
      this.player.moveLeft();
    }
    if (keyCode === 39) {
      this.player.moveRight();
    }
    if (keyCode === 40) {
      this.player.moveDown();
    }
  }
}
