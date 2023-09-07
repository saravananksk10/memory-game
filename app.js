document.addEventListener('DOMContentLoaded', () => {
const cardArray =[
     {
        name:'fries',
        img:'images/fries.png'
     },
     {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
     },
     {
        name:'hotdog',
        img:'images/hotdog.png'
     },
     {
        name:'ice-cream',
        img:'images/ice-cream.png'
     },
     {
        name:'milkshake',
        img:'images/milkshake.png'
     },
     {
        name:'pizza',
        img:'images/pizza.png'
     },
     {
        name:'fries',
        img:'images/fries.png'
     },
     {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
     },
     {
        name:'hotdog',
        img:'images/hotdog.png'
     },
     {
        name:'ice-cream',
        img:'images/ice-cream.png'
     },
     {
        name:'milkshake',
        img:'images/milkshake.png'
     },
     {
        name:'pizza',
        img:'images/pizza.png'
     }
]

// random array
cardArray.sort(function (){
      return 0.5-Math.random()
})
const grid= document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let CardsChosen =[]
let CardsChosenId =[]
let CardsWon =[]





function createBoard(){
    for(let i=0; i < cardArray.length ; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        
    }
}

createBoard()


function flipCard(){
   const cardID = this.getAttribute('data-id')
   CardsChosen.push(cardArray[cardID].name)
   CardsChosenId.push(cardID)
   this.setAttribute('src', cardArray[cardID].img)

   if(CardsChosen.length==2){
       setTimeout(checkForMatch,500)
   }
}


function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = CardsChosenId[0]
    const optionTwoId = CardsChosenId[1]

    if( optionOneId == optionTwoId){
       cards[optionOneId].setAttribute('src','images/blank.png')
       cards[optionTwoId].setAttribute('src','images/blank.png')
       alert('you have clicked the same image')
    }

    else if( CardsChosen[0] === CardsChosen[1]){
       alert('you found a match!')
       cards[optionOneId].setAttribute('src','images/white.png')
       cards[optionTwoId].setAttribute('src','images/white.png')
       cards[optionOneId].removeEventListener('click', flipCard)
       cards[optionTwoId].removeEventListener('click', flipCard)
       CardsWon.push(CardsChosen)
    }

    else{
       cards[optionOneId].setAttribute('src','images/blank.png')
       cards[optionTwoId].setAttribute('src','images/blank.png')
       alert('sorry, try again')
    }

    CardsChosen=[]
    CardsChosenId=[]
    resultDisplay.textContent=CardsWon.length
    if(CardsWon.length === cardArray.length/2){
       resultDisplay.textContent= 'congratulations! you found them all!'
    }
}

})