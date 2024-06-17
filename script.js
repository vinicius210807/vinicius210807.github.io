const car = document.getElementById('car');
const game = document.getElementById('game');
const background = document.getElementById('background');

let carSpeed = 10; // Ajuste a velocidade do movimento do carrinho

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) { // Tecla da seta para a direita
    moveCarRight();
  }
});

document.getElementById('touch-area').addEventListener('touchstart', function() {
  moveCarRight();
});

function moveCarRight() {
  let currentLeft = parseInt(car.style.left) || 0;
  let newLeft = currentLeft + carSpeed;
  car.style.left = newLeft + 'px';
  adjustCamera(newLeft);
}

function adjustCamera(carPosition) {
  const gameWidth = game.offsetWidth;
  const backgroundWidth = background.offsetWidth;
  const maxBackgroundPosition = gameWidth - backgroundWidth;

  if (carPosition > gameWidth / 2) {
    let backgroundPosition = -(carPosition - gameWidth / 2);
    
    if (backgroundPosition < maxBackgroundPosition) {
      backgroundPosition = maxBackgroundPosition;
    }

    game.style.left = -carPosition + gameWidth / 2 + 'px';
    background.style.left = backgroundPosition + 'px';
  }
}
