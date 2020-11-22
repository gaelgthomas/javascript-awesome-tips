const fruits = ['apple', 'banana', 'pineapple', 'pear', 'watermelon']

//Looping through the array the regular way
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*Output:
apple
banana
pineapple
pear
watermelon */

//SAME with FOR...OF statement
for (const j of fruits) console.log(j)

/*Output:
apple
banana
pineapple
pear
watermelon */
