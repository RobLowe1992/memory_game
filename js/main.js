// @codekit-prepend 'js/main.js'

console.log("Up and running!");

var cards = [
    {
        "rank": "queen",
        "suit":"hearts",
        "cardImage": "../images/queen-of-hearts.png"
    },{
        "rank": "queen",
        "suit":"diamonds",
        "cardImage": "../images/queen-of-diamonds.png"
    },{
        "rank": "king",
        "suit":"hearts",
        "cardImage": "../images/king-of-hearts.png"
    },{
        "rank": "king",
        "suit":"diamonds",
        "cardImage": "../images/king-of-diamonds.png"
    }

]

var cardsInPlay = [];

var checkForMatch = function() {

    if(cardsInPlay.length === 2) {
        cardsInPlay[0].rank === cardsInPlay[1].rank?alert('You found a match!'):alert('Sorry, try again.');
    }
}

var flipCard = function(cardId) {

    console.log(`User flipped ${cards[cardId].rank}`)
    cardsInPlay.push(cards[cardId]);

    checkForMatch();
}





