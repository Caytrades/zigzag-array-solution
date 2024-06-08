/*
Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.
Given an array of integers numbers, 
your task is to check all the triples of its consecutive elements for being a zigzag.
More formally, your task is to construct an array of length numbers.length - 2,
where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) 
is a zigzag, and 0 otherwise.
*/

function solution(numbers) {
    let n = numbers.length;
    if (n < 3) {
        return [];
}

 let result = [];
    
    for (let i = 0; i < n - 2; i++) {
        let a = numbers[i];
        let b = numbers[i + 1];
        let c = numbers[i + 2];
        if ((a < b && b > c) || (a > b && b < c)) {
            result.push(1);
        } else {
            result.push(0);
        }
    }
    
    return result;
}

let numbers = [1, 3, 2, 4, 5, 3];
console.log(solution(numbers)); 