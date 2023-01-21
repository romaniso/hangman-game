import { Levels } from "./Levels.js";
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
  constructor({ wordBox, hintBox, lettersBox, nextButton, data }) {
    this.data = data;
    this.wordBox = wordBox;
    this.hintBox = hintBox;
    this.lettersBox = lettersBox;
    this.nextButton = nextButton;
    //Randomly
    // const { hint, term } =
    //   this.data[Math.floor(Math.random.apply() * this.data.length)];
    //By order
    this.dataIndex = 0;
    const { hint, term } = this.data[this.dataIndex];
    this.term = term;
    this.script = new Term(term);
    this.hangman = new Levels(".level");
    this.drawButtons(term);
    this.drawHint(hint);
    this.drawTerm(this.script.scriptedTerm);
    this.nextButton.addEventListener("click", this.nextQuestion.bind(this));
  }
  choseLetter(letter, e) {
    e.target.disabled = true;

    if (this.script.isLetterInTerm(letter)) {
      this.drawTerm(this.script.scriptedTerm);
      if (!this.script.scriptedTerm.includes("_")) {
        this.hangman.showPlayerState(true);
        this.hangman.hangmanImg.src = "/assets/happyhangman.png";
        this.wordBox.className =
          "animate__animated animate__shakeX animate__infinite animate__slow";
        setTimeout(() => {
          //!!  I want to use resetGame method but problem is that I cannot reach game object from choseletter cause this here is button
          alert("You won");
        }, 500);
      }
    } else {
      this.hangman.increaseState();
      this.hangman.showPlayerState();
    }
  }
  drawButtons() {
    this.lettersBox.innerHTML = "";
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
  nextQuestion() {
    if (this.dataIndex >= this.data.length - 1) {
      this.dataIndex = 0;
      this.resetGame(this.script.scriptedTerm, this.dataIndex);
    } else {
      this.dataIndex++;
      this.resetGame(this.script.scriptedTerm, this.dataIndex);
    }
  }
  resetGame(scriptedTerm, index) {
    const { hint, term } = this.data[index];
    this.drawButtons(term);
    this.drawHint(hint);
    this.script = new Term(term);
    this.drawTerm(scriptedTerm);
    this.hangman.resetHangman();
    this.wordBox.className = "";
  }
}
