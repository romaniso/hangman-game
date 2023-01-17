import { Term } from "./Term.js";

export class Game {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  constructor({ wordBox, hintBox, lettersBox, data }) {
    this.data = data;
    this.wordBox = wordBox;
    this.hintBox = hintBox;
    this.lettersBox = lettersBox;
    const { hint, term } =
      this.data[Math.floor(Math.random.apply() * this.data.length)];
    this.scriptedTerm = new Term(term);
    this.drawButtons();
    this.drawHint(hint);
    this.drawTerm(this.scriptedTerm.scriptedTerm);
  }
  choseLetter(letter) {
    console.log(letter);
  }
  drawButtons() {
    this.alphabet.forEach((letter) => {
      const btn = document.createElement("button");
      btn.innerHTML = letter;
      btn.addEventListener("click", () => this.choseLetter(letter));
      this.lettersBox.appendChild(btn);
    });
  }
  drawHint(hint) {
    this.hintBox.textContent = hint;
  }
  drawTerm(scriptedTerm) {
    this.wordBox.textContent = scriptedTerm;
  }
}
