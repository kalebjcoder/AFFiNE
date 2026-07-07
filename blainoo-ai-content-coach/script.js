const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
  startButton.textContent = 'Let’s Create!';
  startButton.setAttribute('aria-label', 'Creation mode started');
});
