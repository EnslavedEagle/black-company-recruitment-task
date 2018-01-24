const ranking = new Ranking('#numbers-ranking');
const randoms = new Randoms('#random-numbers');

(function InitComponents(...components) {
  components.forEach((component) => component.init());
})(randoms, ranking);