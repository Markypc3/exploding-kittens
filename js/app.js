window.onload = function(){
  console.log("let's get started building exploding kittens!!!");
  Deck.initialize(4);
}
// var types = ['Exploding Kitten']

var explodingKitten = (function () {
  var name ='';
  var type = 'explodingKitten';
})();
var Deck = (function () {
  var cards = [1,2,3,4,5,6,7,8,9,0];
  // var shuffle = ;
  return {
    shuffle: function() {
       for(var j, x, i = cards.length; i; j = Math.floor(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
       console.log("Shuffled!");
    },
    initialize: function(players){
      //populate deck to contain the correct amount of cards of each type.
      //this does not bring the game to a playable state.
      this.shuffle();
      console.log(cards.join());
    }

  }
})();
