export class Term {
  constructor(term) {
    this.term = term.toLowerCase();
    this.scriptedTerm = "";
    this.guessedLetters = "";
    this.enscriptTerm(this.term);
  }
  enscriptTerm(term) {
    let scriptedTerm = "";
    for (let letter of this.term) {
      if (letter === " " || this.guessedLetters.includes(letter))
        scriptedTerm += letter;
      else scriptedTerm += "_";
    }
    this.scriptedTerm = scriptedTerm;
  }
  isLetterInTerm(letter) {
    if (this.term.includes(letter.toLowerCase())) {
      this.guessedLetters += letter.toLowerCase();
      this.enscriptTerm(this.term);
      return true;
    } else {
      return false;
    }
  }
}
