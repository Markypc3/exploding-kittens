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
      //perform exploding kitten card reinsertion
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
  //this object is used only to assist game setup. one cards are set up, the game begin and this is not used.
  //There may still be cards in object after game start but are effectively removed from the game..
  var gameSetupCards = {defuses:[],explodingkittens:[]};
  // var shuffle = ;
  return {
    shuffle: function() {
       for(var j, x, i = cards.length; i; j = Math.floor(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
       console.log("Shuffled!");
    },
    deal: function(players){
      //deal 4 cards to each player and 1 defuse card;
      //if there are only 2 players only insert 2 defuse cards into deck.
      //else insert the rest of the defuse cards into deck
      //insert explodingkittens in the amount of one less than the amount of players into the deck
      //shuffle.
    },
    insertCard: function(card) {
      cards.push(card);
    },
    reInsertKitten: function(card,index) {
      //TODO:need to insert card into index and push rest of cards down.
    }
    initialize: function(players){
      //populate cards to contain the correct amount of cards of each type except EKs and defuses.
      //populate gameSetupCards to contain the defuses and explodingkittens as appropriate.
      //go through card list and create all the cards.
      //deal all the cards to the players
      //this will bring the game to a playable state.
      this.shuffle();
      console.log(cards.join());
    },
    draw: function(currentPlayer){
      return cards.pop();
    }

  }
})();
var Player = (function() {
  var name = '';
  var hand = [];
  return {
    create: function (/*name*/) {
      this.name = '';//name
      this.hand = [];
    }
  }
})();
var Game = (function() {
  var players = [];
  var maxPlayers = 5;
  var turn = 0;
  return {
    getTurn: function(){
      turn++;
      turn %= players.length;
      return turn;
    }
    startGame: function(numberOfPlayers){
      if (numberOfPlayers > maxPlayers) {
        console.log("You can't have more than " + maxPlayers + " players playing this game.");
        return false;
      }
      for (var i = 0; i < numberOfPlayers; i++) {
        players.push(new Player.create());
      }
      Deck.initialize(players);
      while(true){
        //game loop
      }
    }
  }
})();
