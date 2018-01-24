function Ranking(selector) {
  Component.call(this, selector);
  this.numbers = [];
}

Ranking.prototype = Object.create(Component.prototype);
Ranking.constructor = Ranking;

Ranking.prototype.init = function() {
  axios.get('http://localhost:3000/numbers')
    .then((response) => {
      this.numbers = response.data.data.map((number) => {
        return { id: number, times: 0 }
      });

      this.render();
    })
    .catch((error) => {
      console.error(error);
    });
};

Ranking.prototype.render = function() {
  const container = this.getDOMElement();
  container.innerHTML = '';

  const list = document.createDocumentFragment();
  this.numbers.forEach(function(number) {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = `${number.id} <em>(shown ${number.times} time${number.times !== 1 ? 's' : ''})</em>`;

      list.appendChild(listElement);
  });
  container.appendChild(list);
};

Ranking.prototype.addNumbers = function(numbers) {
  numbers.forEach((number) => {
    const element = this.numbers.find((item) => item.id === number.id);
    element.times++;
  });
  this.numbers.sort((a, b) => a.times < b.times);
  this.render();
}