import { Game } from "./Game.js";
import data from "./data.js";

const game = new Game({
  wordBox: document.getElementById("word-box"),
  hintBox: document.getElementById("hint-box"),
  lettersBox: document.getElementById("letters-box"),
  data: data,
});
