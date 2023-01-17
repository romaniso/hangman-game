export class Term {
  constructor(term) {
    this.term = term;
    this.scriptedTerm = "";
    this.enscriptTerm(this.term);
    console.log(this.scriptedTerm);
  }
  enscriptTerm(term) {
    for (let letter of this.term) {
      letter.toLowerCase();
      if (letter === " ") this.scriptedTerm += letter;
      else this.scriptedTerm += "_";
    }
  }
}
