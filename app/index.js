import 'whatwg-fetch';


const drawUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

const draw = () => {
  fetch(drawUrl).then((res) => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  }).then((cards) => {
    console.log(cards);
  });
};

const btn = document.querySelector('.draw-btn');

btn.addEventListener('click', draw);

// set up hot module replacement
if (module.hot) {
  module.hot.accept();
}
