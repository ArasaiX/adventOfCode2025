#!/usr/bin/env node
console.time("execution time");

console.log("Day 2!");

import { readFileSync } from "fs";

// leer

const input = readFileSync("input.txt", "utf8").trim().split(",");

let result = 0;

let result2 = 0;

const REGEX_DUPLICATE_DIGITS = /^(\d{1,100})\1$/;

const REGEX_DUPLICATE_DIGITS_2 = /^(\d+)\1+$/;

input.forEach((i) => {
    const [first, last] = i.split("-");
    const arr = Array.from({length: (parseInt(last) - parseInt(first)) + 1}, (_,j) => Number(first) + j);
    // console.log("Arr", arr)
    arr.forEach((a) => {
        const str = String(a);

        if (str.startsWith("0")) {
            // console.log("starts with 0", a)
            result = result + a;
        } else if (REGEX_DUPLICATE_DIGITS.test(str)) {
            // console.log("as duplciated", a)
            result = result + a;
        }
        if (REGEX_DUPLICATE_DIGITS_2.test(str)) {
            result2 = result2 + a;
        }
        return;
    })
})

console.log("RESULT:", result)

console.log("RESULT 2:", result2)

console.timeEnd("execution time")
