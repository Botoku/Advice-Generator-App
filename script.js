'use strict';

const URL = 'https://api.adviceslip.com/advice';
const title = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.dice-container');

const finalData = function () {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            title.innerHTML = `ADVICE #${data.slip.id}`;
            advice.innerHTML = `${data.slip.advice}`;
        });
};
btn.addEventListener('click', () => {
    finalData();
});
