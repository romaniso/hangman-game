export class Levels {
  constructor(elName) {
    this.currentState = 0;
    this.stateNumber = 10;
    this.elName = elName;
    this.hangmanImg = document.querySelector("#hangman");
  }
  showPlayerState(victory) {
    if (victory) {
      document.querySelectorAll("div[data-level]").forEach((level) => {
        level.style.opacity = "0";
      });
    }
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
      this.hangmanImg.src = "/assets/deadhangman.png";
      setTimeout(() => {
        alert("Sorry you lost");
      }, 500);
    }
  }
  resetHangman() {
    this.currentState = 0;
    document.querySelectorAll("div[data-level]").forEach((level) => {
      level.style.opacity = "1";
    });
  }
}
