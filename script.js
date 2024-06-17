const car = document.getElementById('car');
const touchArea = document.getElementById('touch-area');

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) { // Tecla da seta para a direita
    moveCarRight();
  }
});

touchArea.addEventListener('touchstart', function() {
  moveCarRight();
});

function moveCarRight() {
  let currentLeft = parseInt(car.style.left) || 0;
  let newLeft = currentLeft + 10; // Ajuste a velocidade de movimento do carrinho
  car.style.left = newLeft + 'px';
  adjustBackgroundPosition(newLeft);
}

function adjustBackgroundPosition(carPosition) {
  const gameWidth = document.getElementById('game').offsetWidth;
  const background = document.getElementById('background');
  
  if (carPosition > gameWidth / 2) {
    let backgroundPosition = -(carPosition - gameWidth / 2);
    background.style.transform = `translateX(${backgroundPosition}px)`;
  }
}
