const animals = ['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']

const animalsOccurenceInArray = [...new Set(animals)].map((elem) => ({
    key: elem,
    value: animals.filter((animal) => animal === elem).length,
}))

/* Output: [
    { key: 'owl', value: 2 },
    { key: 'frog', value: 1 },
    { key: 'canary', value: 1 },
    { key: 'duck', value: 2 },
    { key: 'goose', value: 1 }
] */
