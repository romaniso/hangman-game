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
    this.term = term;
    this.script = new Term(term);
    this.drawButtons(term);
    this.drawHint(hint);
    this.drawTerm(this.script.scriptedTerm);
  }
  choseLetter(letter, e) {
    e.target.disabled = true;
    this.script.isLetterInTerm(letter);
    this.drawTerm(this.script.scriptedTerm);
  }
  drawButtons() {
    this.alphabet.forEach((letter) => {
      const btn = document.createElement("button");
      btn.innerHTML = letter;
      btn.addEventListener("click", (e) => this.choseLetter(letter, e));
      this.lettersBox.appendChild(btn);
    });
  }
  drawHint(hint) {
    this.hintBox.textContent = hint;
  }
  drawTerm() {
    this.wordBox.textContent = this.script.scriptedTerm;
  }
}
