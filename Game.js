class Game {
  constructor() {
    this.player = new Player(250, 250);
    this.obstacle = new Obstacle(50, 400);
  }

  draw() {
    clear();
    background("orange");
    this.player.draw();
    this.obstacle.draw();
    if (this.collisionCheck(this.player, this.obstacle)) {
      noLoop();
      const button = document.createElement("button");
      button.innerText = "Wo wooo. You lost. let's play again?";
      button.style.background = "red";
      document.body.appendChild(button);
      // button.addEventListener("click", () => {
      //   console.log("YAY. LETS PLAY");
      // });
      button.onclick = () => {
        this.obstacle.setRandomPosition();
        button.parentNode.removeChild(button);
        loop();
      };
    }
    //  this.collisionCheck(this.player, this.obstacle);
  }

  collisionCheck(player, obstacle) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = obstacle.y;
    const obsLeftArea = obstacle.x;
    const obsRightArea = obstacle.x + obstacle.width;
    const obsBottomArea = obstacle.y + obstacle.height;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
    );
  }

  keyPressed() {
    //  console.log("KEY PRESSED", keyCode);
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
