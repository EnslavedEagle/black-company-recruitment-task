'use strict';

function Randoms(selector) {
  Component.call(this, selector);
  this.randoms = [];
}

Randoms.prototype = Object.create(Component.prototype);
Randoms.constructor = Randoms;

Randoms.prototype.init = function init() {
  this.fetch();
  setInterval(() => this.fetch(), 10000);
}

Randoms.prototype.fetch = function fetch() {
  axios.get('http://localhost:3000/random-numbers')
    .then((response) => {
      this.numbers = response.data.data.map((number) => {
        return { id: number }
      });
      this.render();
    })
    .catch((error) => {
      console.error(error);
    });
}

Randoms.prototype.render = function render() {
  const container = this.getDOMElement();

  const list = document.createDocumentFragment();
  this.numbers.forEach((number) => {
    const listElement = document.createElement('li');

    listElement.classList.add('list-group-item');
    listElement.innerText = number.id;

    list.appendChild(listElement);
  });
  container.appendChild(list);
}