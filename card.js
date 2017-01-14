var request = require('request');

// shuffle cards

var onShuffle = function(err, res, body) {
  if (err) {
    console.log(err);
    throw Error(err);
  }
  var deckId = JSON.parse(body).deck_id;
  draw(deckId);
};

var onDraw = function(err, res, body) {
  if (err) {
    throw Error(err);
  }
  console.log(body);

};

var draw = function(deckId) {
  console.log(deckId);
  request('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=2', onDraw);

};

request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', onShuffle);
