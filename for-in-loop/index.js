const fruits = ['apple', 'banana', 'pineapple', 'pear', 'watermelon']

//Looping trough the array 
// for...in statement gives you the current index
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
  }
  
  /* Output: 
  0: apple
  1: banana
  2: pineapple
  3: pear
  4: watermelon
  */
  
  const object = {
      prop1: "A",
      prop2: "B",
      prop3: "C"
  };
  
  //SAME with object
  //for...in gives you the property name
  for (const property in object) {
      console.log(`${property}: ${object[property]}`);
  }
  
  /* Output: 
  prop1: A
  prop2: B
  prop3: C
  */