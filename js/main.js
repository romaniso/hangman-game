import { Game } from "./Game.js";
import data from "./data.js";

const game = new Game({
  wordBox: document.querySelector("#word-box p"),
  hintBox: document.querySelector("#hint-box p"),
  lettersBox: document.getElementById("letters-box"),
  data: data,
});
