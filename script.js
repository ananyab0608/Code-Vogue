let currentIndex = 0;
const outfits = document.querySelectorAll('.outfit-page');
const totalOutfits = outfits.length;

function showNextOutfit() {
  outfits[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalOutfits;
  outfits[currentIndex].classList.add('active');
}

function redirectToProducts() {
  window.location.href = 'main.html';
}

// Initialize the first outfit
outfits[currentIndex].classList.add('active');

// Set interval to change the outfit every 2-3 seconds
setInterval(showNextOutfit, 3000);
