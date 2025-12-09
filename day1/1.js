#!/usr/bin/env node
console.time("execution time")

console.log("Day 1");

import { readFileSync } from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const changeDialNumber = (operation, numberOperate, initNumber) => {
    let aux = 0;
    let hits = 0;
    console.log(operation, numberOperate, initNumber)
    if (operation === "SUMA") {
        aux = initNumber + numberOperate;

        for (let i = 0; aux > 99; i++) {
            aux = aux - 100;
            hits = hits + 1;
        }   
    }
    if (operation === "RESTA") {
        aux = initNumber - numberOperate;

        if (initNumber === 0) {
            hits = Math.floor(numberOperate / 100);
        } else if (numberOperate >= initNumber) {
            hits = 1 + Math.floor((numberOperate - initNumber) / 100);
        }
 
        for (let i = 0; aux < 0; i++) {
            aux = aux + 100
        }

    }

    secondPassword = secondPassword + hits;

    return aux;
};

let password = 0;

let acc = 50;

let secondPassword = 0;

input.forEach((i, index) => {
  const number = i.slice("1");
  let aux = 0;
  if (i.startsWith("L")) {
    aux = changeDialNumber("RESTA", Number(number), acc);
  } else if (i.startsWith("R")) {
    aux = changeDialNumber("SUMA", Number(number), acc);
  }

  acc = aux;

  if (acc === 0) {
    password = password + 1;
  }
});

console.log("PASSWORD: ", password);

console.log("Second PASSWORD", secondPassword)

console.timeEnd("execution time")
