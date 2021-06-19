// getting all cards
const cards = document.querySelectorAll('.card');

//init each card & adding EventListeners
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate)
    card.addEventListener('mouseout', stopRotate)    
}

//desc the functions
function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2; 
    const halfWidth = cardItem.offsetWidth / 2;  
    
    cardItem.innerText = 'X = ' + event.offsetX + ' ' + '\n Y = ' + event.offsetY;    
    cardItem.style.transform = 'rotateX('
    +-(event.offsetY - halfHeight) / 7 + 'deg)' + 'rotateY('
    +(event.offsetX - halfWidth) / 7 + 'deg)'
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0deg)'
}