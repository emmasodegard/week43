// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    for (let i = 1; i < height; i++) {
        let spaces = '';
        for (let j = 0; j < height - i; j++) {
            spaces += ' ';
        }
        let stars = '';
        for (let k = 0; k < (2 * i - 1); k++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
    let trunk = '';
    for (let l = 0; l < height - 1; l++) {
        trunk += ' ';
    }
    trunk += 'x';
    console.log(trunk);
}

drawTree(5);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '* ';
        }
        console.log(line.trim());
    }
    for (let i = size - 1; i > 0; i--) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '* ';
        }
        console.log(line.trim());
    }
}

drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {
    let topBottom = '+';
    for (let i = 0; i < m; i++) {
        topBottom += '-';
    }
    topBottom += '+';

    let middle = '|';
    for (let i = 0; i < m; i++) {
        middle += ' ';
    }
    middle += '|';

    console.log(topBottom);
    for (let i = 0; i < n; i++) {
        console.log(middle);
    }
    console.log(topBottom);
}

drawBox(2, 2);


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    word = word.toLowerCase();
    let seen = {};
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char >= 'a' && char <= 'z') {
            if (seen[char]) {
                return false;
            }
            seen[char] = true;
        }
    }
    return true;
}

console.log(isHeterogram("mango"));
console.log(isHeterogram("puppy"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function areAnagrams(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1.length !== word2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let i = 0; i < word1.length; i++) {
        let char1 = word1[i];
        let char2 = word2[i];

        count1[char1] = (count1[char1] || 0) + 1;
        count2[char2] = (count2[char2] || 0) + 1;
    }

    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("earth", "heart"));
console.log(areAnagrams("sun", "moon"));