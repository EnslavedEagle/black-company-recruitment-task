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
        return { id: number }
      });

      this.render();
    })
    .catch((error) => {
      console.error(error);
    });
};

Ranking.prototype.render = function() {
  const container = this.getDOMElement();

  const list = document.createDocumentFragment();
  this.numbers.forEach(function(number) {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = number.id;

      list.appendChild(listElement);
  });
  container.appendChild(list);
};