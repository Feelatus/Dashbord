let card = document.querySelector('.bluecard ');

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  console.log('click activated');
});
