const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random()) // JS 'trick code' for shuffling arrays randomly.

/* When she says "I'm going to save this as ..." what she means is saving the action, like grabbing the element with the ID of 'grid', and refering to it later. So by making it a variable, we can reuse this action on many different occassions. */

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() { // This creates the randomness of the board //
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() { // This checks if the selected one is a match //
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('clicks', flipCard);
        cards[optionTwoId].removeEventListener('clicks', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        alert('Sorry, try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = [] // resets array list
    cardsChosenIds = []
    /* divides by 2 because we're matching 2 cards at a time, so we have 6 pairs of 12 cards total */
    if (cardsWon.length === cardArray.length/2) { 
        resultDisplay.textContent = 'Congratulations you found them all!'
    }

    console.log(cards);
    console.log('check for match!'); /* She usually starts her functions with console.log('pseudocode for what the function will do') and then builds it out on top of the console.log */
}

function flipCard() { // This interacts by registering the click of the board //
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name) // Adds elements to the array in queue order, first to last //
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

    console.log(cardsChosen)
    console.log(cardsChosenIds)
}



