const myFunction = (...arguments) => {
    console.log(arguments)
    // Output: ['The', 'sun', 'is', 'yellow']
}

myFunction('The', 'sun', 'is', 'yellow')

const myOtherFunction = (firstArg, secondArg, ...otherArguments) => {
    console.log(firstArg, secondArg, otherArguments)
    // Output: 1, 2, ['Hello', 'world', '!']
}

myOtherFunction(1, 2, 'Hello', 'world', '!')
