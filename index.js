const mario = document.getElementById("bool");
let isJumping = false;
let position = 0; 
let isGoingLeft = false;
let isGoingRight = false;
let horizontal = 5;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
    jump();
  } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
    isGoingLeft = true;
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    isGoingRight = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    isGoingLeft = false;
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    isGoingRight = false;
  }
});

function jump() {
  if (isJumping) return;
  isJumping = true;

  let up = setInterval(() => {
    if (position >= 400) {
      clearInterval(up);

      let down = setInterval(() => {
        if (position <= 0) {
          clearInterval(down);
          isJumping = false;
        } else {
          position -= 5;
          mario.style.top = `${80 - position / 5}%`;
        }
      }, 20);
    } else {
      position += 5;
      mario.style.top = `${80 - position / 5}%`;
    }
  }, 20);
}

function move() {
  if (isGoingLeft && horizontal > 0) horizontal -= 1;
  if (isGoingRight && horizontal < 90) horizontal += 1;
  mario.style.left = `${horizontal}%`;
  requestAnimationFrame(move);
}

move();
