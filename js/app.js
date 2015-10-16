window.onload = function(){
  console.log("let's get started building exploding kittens!!!");
  Deck.initialize(4);
}
// var types = ['Exploding Kitten']

var Card = (function () {
  var name = '';
  var type = '';
  var image = '';
  var apply = {
    explodingkitten:function(currentPlayer){
      if(currentPlayer.has('defuse')){//todo: implement player module and has function, as well as hand array
        alert('Use defuse card?');
        //allow player to activate a defuse card from their hand.
        return true;
      } else {
        alert(currentPlayer.getName() + ' doesn\'t have a defuse card! BOOM!');
        return false;
      }
    },
    defuse:function(currentPlayer){
      //check if this card may be used
      //if yes, move itself to discard pile
      //if not reject play
    }
  };
  return {
    Card: function(name, type, image){
      this.name = name;
      this.type = type;
      this.image = image;
      this.
    }
  }
})();
var Deck = (function () {
  var cards = [1,2,3,4,5,6,7,8,9,0];
  // var shuffle = ;
  return {
    shuffle: function() {
       for(var j, x, i = cards.length; i; j = Math.floor(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
       console.log("Shuffled!");
    },
    deal: function(players){

    },
    initialize: function(players){
      //populate deck to contain the correct amount of cards of each type.
      //this does not bring the game to a playable state.
      this.shuffle();
      console.log(cards.join());
    }

  }
})();
