export class Hangman {
  constructor(elName) {
    this.currentState = 0;
    this.stateNumber = 10;
    this.elName = elName;
  }
  showPlayerState() {
    if (this.currentState > 0) {
      const state = document.querySelector(
        `${this.elName}-${this.currentState}`
      );
      state.style.opacity = "0";
    }
  }
  increaseState() {
    this.currentState++;
    if (this.currentState === this.stateNumber) {
      setTimeout(() => {
        alert("Sorry you lost");
      }, 500);
    }
  }
}
