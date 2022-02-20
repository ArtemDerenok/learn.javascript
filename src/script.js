const form = document.getElementById("form");
const beforMoney = document.getElementById("money-before");
const afterMoney = document.getElementById("money-after");
const afterGraph = document.getElementById("height-after");

const changeGraph = (difference, initial) => {
  const graphValue = difference * 100 / initial;
  afterGraph.style.height = `${100 + graphValue}px`;
};

const showResult = (befor, after) => {
  beforMoney.textContent = befor;
  afterMoney.textContent = after;
};

const calculateDeposite = (initial, interest, years) => {
  interest = interest * 0.01;
  years = years / 12;
  const result = Math.round(initial * (1 + interest) ** years);
  showResult(initial, result);
  changeGraph(result - initial, initial);
};

calculateDeposite(+form.elements[0].value, +form.elements[2].value , +form.elements[1].value);

form.addEventListener("input", () => {
  calculateDeposite(+form.elements[0].value, +form.elements[2].value , +form.elements[1].value);
});
