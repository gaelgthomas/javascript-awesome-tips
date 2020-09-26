const animals = ['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']

const uniqueAnimalsWithFilter = animals.filter(
    // Parameters example: 'owl', 0, ['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']
    (animal, index, array) => array.indexOf(animal) == index
)
// Output: ['owl', 'frog', 'canary', 'duck', 'goose']

const uniqueAnimalsWithSet = [...new Set(animals)]
// Output: ['owl', 'frog', 'canary', 'duck', 'goose']
