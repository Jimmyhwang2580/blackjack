let newCardEl = document.querySelector("#newCard-el")
let startGameEl = document.querySelector("#startGame-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

let sum = 0
let message = ""
let cards = []
let isAlive = false
let hasBlackJack = false

function getRandomCards(){
    let randomCard = Math.floor (Math.random() * 13) +1
    if(randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}



function startGame(){
    isAlive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if( sum < 21 ){
        message = "Do you want another CARD?" 
        isAlive = true
    } else if ( sum === 21){
        message = "You have BLACKJACK!"
        hasBlackJack = true
    } else{
        message = "You are a sore LOSER!"
        isAlive = false
    }
    messageEl.textContent = message
}


startGameEl.addEventListener("click", startGame)




function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCards()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}


newCardEl.addEventListener("click", newCard)