#!/usr/bin/env node

import { readFileSync } from "fs";

console.time("execution time");

console.log("Day 3!");

const FILE_NAME = "input.txt";

const input = readFileSync(FILE_NAME, "utf8").trim().split("\n");

let result = 0;

input.forEach((i)=>{
        let first = 0;
        let second = 0;
        let bestDigitRight = -Infinity;
        const arr = Array.from(i).map(Number);
        for (let i = arr.length - 1; i >= 0; i--) {
            const d = arr[i];
            if (bestDigitRight !== -Infinity) {
                const candidatePair = d * 10 + bestDigitRight;
                const currentPair = first * 10 + second;
                if (candidatePair > currentPair) {
                first = d;
                second = bestDigitRight;
                }
            }
            if (d > bestDigitRight) bestDigitRight = d;
        }

        result = result + (first * 10 + second)
})
console.log("Result", result)

console.timeEnd("execution time")



