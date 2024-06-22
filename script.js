import data from './data.json' assert {type: 'json'};

const container = document.querySelector('.sum-container');

data.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="points ${item.category}"><div class="info">
      <img src="${item.icon}" alt="${item.category} icon">
      <p class="category">${item.category}</p></div>
      <p class="score"><span>${item.score} </span>&nbsp/&nbsp100</p>
    </div>`;
    container.appendChild(div);
});

const button = document.createElement('button');
button.innerHTML = "Continue"
container.appendChild(button);