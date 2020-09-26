const celsiusDegrees = [15, 22, 30, 5, 10]

const celsiusDegreesTotal = celsiusDegrees.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)
// Output: 82
