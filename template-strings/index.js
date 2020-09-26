const name = 'Gael'
const age = 22
const city = 'Paris'
const nbCats = 1

const selfIntroductionWithoutLiterals =
    'My name is ' +
    name +
    ", I'm " +
    age +
    'yo' +
    ' and I live in ' +
    city +
    '. I have ' +
    nbCats +
    ' cat(s).'
// Output: "My name is Gael, I'm 22yo and I live in Paris. I have 1 cat(s)."

// Simple
const selfIntroductionWithLiterals = `My name is ${name}, I'm ${age}yo and I live in ${city}. I have ${nbCats} cat(s).`
// Output: "My name is Gael, I'm 22yo and I live in Paris. I have 1 cat(s)."

// Advanced
const selfIntroductionWithLiterals = `My name is ${name}, I'm ${age}yo and I live in ${city}. I have ${
    nbCats + 1
} cat(s).`
// Output: "My name is Gael, I'm 22yo and I live in Paris. I have 2 cat(s)."
