const RankingComponent = new Ranking('#numbers-ranking');
const RandomsComponent = new Randoms('#random-numbers', ranking);

(function InitComponents(...components) {
  components.forEach((component) => component.init());
})(RandomsComponent, RankingComponent);