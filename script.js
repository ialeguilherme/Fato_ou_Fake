const startBtn = document.getElementById('start-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const cardContainer = document.getElementById('card-container');
const cardImage = document.getElementById('card-image');

const cardPaths = Array.from({ length: 40 }, (_, i) => `pasta-de-imagens/card_${i + 1}.jpg`);

function shuffleCard() {
  cardImage.classList.add('shuffling');

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * cardPaths.length);
    cardImage.src = cardPaths[randomIndex];
    cardImage.classList.remove('shuffling');
  }, 1000);
}

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  cardContainer.classList.remove('hidden');
  shuffleCard();
});

shuffleBtn.addEventListener('click', shuffleCard);
