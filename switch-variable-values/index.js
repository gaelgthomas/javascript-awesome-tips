//Switching values between variables may require some manipulations
let favoriteColor = 'blue'
let unlikedColor = 'red'

let color
color = favoriteColor
favoriteColor = unlikedColor
unlikedColor = color
console.log(favoriteColor, unlikedColor)
// Output: red blue

// The same with destructuring
let newFavoriteColor = 'blue'
let newUnlikedColor = 'red'
;[newFavoriteColor, newUnlikedColor] = [newUnlikedColor, newFavoriteColor]
console.log(newFavoriteColor, newUnlikedColor)
// Output: red blue
