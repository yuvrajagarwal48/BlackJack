cardsList=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

let firstCard
let secondCard
let nextCard=''
let cards=[]
let cardsDealer=[]
let sum =0
let money=3000

cardsObj={
    'A':1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    'J':11,
    'Q':11,
    'K':11
}
const messageDisplay=document.getElementById('message')
const sumDisplay=document.getElementById('Sum')
const cardDisplay=document.getElementById('cards')
const newBtn = document.getElementById('new card')
const startBtn=document.getElementById('start')
let message=''


function randomCard(){
    return Math.floor(Math.random() *13 )

}

function startGame(){
    cards=[]
    sum=0
    index1=randomCard()
    index2=randomCard()
    cards.push(cardsList[index1])
    cards.push(cardsList[index2])
    sum+=cardsObj[cards[0]]+cardsObj[cards[1]]
    renderGame()
}

function renderGame(){
    if (sum<21){
        message='Want another card?'
    }else if(sum ===21){
        message='BlackJack!!!'
        newBtn.disabled=true
    }else{
        message='You lost'
        newBtn.disabled=true
    }
    cardDisplay.textContent='CARDS: '+cards
    sumDisplay.textContent='SUM: '+sum
    messageDisplay.textContent=message
}
function newCard(){
    nextIndex=randomCard()
    cards.push(cardsList[nextIndex])
    sum+=cardsObj[cards[cards.length-1]]
    renderGame()
}

