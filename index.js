
if(typeof window !=='undefined'){
    let firstcard=10
let secondcard=4
let cards=[firstcard,secondcard]
let sum=firstcard + secondcard
let hasblackjack=false
let isalive=true
let message=""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")
function startgame(){
    rendergame()
}
 function rendergame(){
    cardEl.textContent="Cards:"
    for (let i = 0; i < cards.length; i++) {
       cardEl.textContent += cards[i]+ " "
        
    }
    sumEl.textContent="Sum:"+ sum
    if(sum <= 20){
        message="Do u want to draw a new card"
    }
    else if(sum===21){
       message= "U have won the blackjack game"
       hasblackjack=true
    }
    else{
        message= "U are out of the blackjack game"
        isalive=false
    }
    messageEl.textContent=message;
    
}
function newcard(){
    console.log("Drawing a new card ")
    let card=6
    sum+=card
    cards.push(card)
    startgame()
    
}
}