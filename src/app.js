/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "crushed", "broke", "peed"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getExcuse(who, action, what, when) {
    let excuse = [];
    let whoDid, actionDone, whatAction, didWhen;
    for (let i = 0; i < who.length; i++) {
      if (what[i]) {
        excuse = excuse.concat(
          who[i] + " " + action[i] + " " + what[i] + " " + when[i]
        );
      } else {
        excuse = excuse.concat(
          who[i] + " " + action[i] + " " + what[i - 1] + " " + when[i]
        );
      }
    }
    return excuse;
  }

  let excuse = getExcuse(who, action, what, when);
  console.log(excuse);
  document.getElementById("excuse").innerHTML =
    excuse[Math.floor(Math.random() * excuse.length)];
};
