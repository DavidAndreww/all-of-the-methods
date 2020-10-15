export const data = {
  arrayMethods: [
    {
      name: 'Array.concat( )',
      description: 'Merges two or more arrays.',
      mutability: 'Immutable',
      returnType: 'Array',
      editor: `
      const array1 = ['a','b','c',];
      const array2 = ['d','e','f'];
      const array3 = array1.concat(array2);
      console.log(array3);

      // Output: ['a', 'b', 'c', 'd', 'e', 'f']
      `
    },
    {
      name: 'Array.from( )',
      description:
        'Creates new, shallow copied array from another array-like, iterable object.',
      mutability: 'Immutable',
      returnType: 'Array',
      editor: `
      let newArr = Array.from('hello')
      console.log(newArr);

      // Output: ['h', 'e', 'l', 'l', 'o']
      `
    },
    // {
    //   name: 'Array.entries( )',
    //   description: 'blah blah blah',
    //   editor: 'let pigs.concat( ) things and stuff'
    // },
    {
      name: 'Array.every( )',
      description:
        'Tests whether all elements in an array pass test implemented by provided function.',
      mutability: null,
      returnType: 'Boolean',
      editor: `
      const isNumber = (value) => typeof value === "number";
      const array = [1,2,3,4,5,'hello'];
      console.log(array.every(isNumber));

      // Output: false
      `
    },
    {
      name: 'Array.fill( )',
      description: 'Changes all elements in an array to a static value, from start index to end index.',
      mutability: 'Mutable',
      returnType: 'Array',
      editor: `
      const array1 = [1, 2, 3, 4];
      array1.fill('tacos', 2, 4);
      console.log(array1);

      // Output: [1, 2, 'tacos', 'tacos']
      `
    },
    {
      name: 'Array.filter( )',
      description: 'Creates a new array with elements that satisfy the criteria of the provided testing function.',
      mutability: 'Immutable',
      returnType: 'Array',
      editor: `
      const colors = ['blue', 'red', 'teal', 'yellow', 'orange', 'turquoise', 'magenta'];
      const shorties = colors.filter(item => item.length <= 4);
      console.log(shorties);

      // Output: ['blue', 'red', 'teal']
      `
    },
    {
      name: 'Array.find( )',
      description:
        'Returns value of the first element in the array that satisfies the provided testing function.',
      mutability: 'Immutable',
      returnType: 'Variable',
      editor: `
      const array1 = [5, 12, 8, 75, 100];
      const found = array1.find(num => num > 10);
      console.log(found);

      // Output: 12
      `
    },
    {
      name: 'Array.forEach( )',
      description: 'Executes a provided function one time for each array element.',
      mutability: 'Immutable',
      returnType: 'Undefined',
      editor: `
      const array1 = ['rock', 'paper', 'scissors'];
      array1.forEach(elem => console.log(elem));

      // Output: 'rock'
      // Output: 'paper'
      // Output: 'scissors'
      `
    },
    {
      name: 'Array.includes( )',
      description: 'Determines whether an array includes a certain value among its elements.',
      mutability: null,
      returnType: 'Boolean',
      editor: `
      const animals  = ['cat', 'spider', 'snake', 'hamster', 'fish'];
      const ownsADog = animals.includes('dog');
      console.log(ownsADog);

      // Output: false
      `
    },
    {
      name: 'Array.map( )',
      description: 'Calls a provided function on each element in an array, and returns a new array with those values.',
      mutability: 'Immutable',
      returnType: 'Variable',
      editor: `
      const surnames = ['Jones', 'Patel', 'Antonelli', 'Hammerschmidt'];
      const doctorize = surnames.map(name => 'Dr.' + name);
      console.log(doctorize);

      // Output: ['Dr.Jones', 'Dr.Patel', 'Dr.Antonelli', 'Dr.Hammerschmidt']
      `
    },
    {
      name: 'Array.lastIndexOf( )',
      description: 'Returns last index at which a given element can be found in an array, or -1 if not present.',
      mutability: null,
      returnType: 'Integer',
      editor: `
      const iceCreamFlavors = ['Chocolate', 'Neapolitan', 'Vanilla', 'Cookies & Cream', 'Chocolate Chip'];
      const flavor = 'Vanilla';
      const inventoryLocation = iceCreamFlavors.lastIndexOf(flavor);
      console.log(inventoryLocation);

      // Output: 2
      `
    },
    {
      name: 'Array.join( )',
      description: 'Creates a string by concatenating all elements of the array, separated by comma or a specific separator string.',
      mutability: 'Immutable',
      returnType: 'String',
      editor: `
      const cars = ['Honda', 'Subaru', 'Toyota', 'Ford'];

      console.log(cars.join());
      // Output: 'Honda,Subaru,Toyota,Ford'

      console.log(cars.join(''));
      // Output: 'HondaSubaruToyotaFord'

      console.log(cars.join('-'));
      // Output: 'Honda-Subaru-Toyota-Ford'
      `
    },
    // {
    //   name: "Array.keys( )",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat( ) things and stuff",
    // },
    {
      name: 'Array.reduce( )',
      description: 'Executs a reducer function on each element of the array, resulting in a single output value.',
      mutability: 'Immutable',
      returnType: 'Variable',
      editor: `
      const numbers = [1, 2, 3, 4];
      const total = numbers.reduce((acc, value) => acc + value, 0);
      console.log(total);

      // Output: 10
      `
    },
    {
      name: 'Array.shift( )',
      description:
        'Removes first element from an array and returns the removed element.',
      mutability: 'Mutable',
      returnType: 'Removed Element',
      editor: `
      const sports = ['Soccer', 'Football', 'Hockey', 'Tennis'];
      const firstElement = sports.shift( ) 

      console.log(firstElement);
      // Output: 'Soccer'

      console.log(sports);
      // Output: ['Football', 'Hockey', 'Tennis']
      `
    },
    {
      name: 'Array.unshift( )',
      description:
        'Adds one or more elements to the beginning of an array and retuns new length of the array.',
      mutability: 'Mutable',
      returnType: 'Integer',
      editor: `
      const sports = ['Soccer', 'Hockey', 'Football', 'Tennis'];
      const totalSports = sports.unshift('Golf', 'Baseball');

      console.log(totalSports);
      // Output: 6

      console.log(sports);
      // Output: ['Golf', 'Baseball', 'Soccer', 'Hockey', 'Football', 'Tennis']
      `
    },
    {
      name: 'Array.pop( )',
      description:
        'Removes the last element from an array and returns that element.',
      mutability: 'Mutable',
      returnType: 'Removed Element',
      editor: `
      const fruits = ['Apple', 'Banana', 'Grape', 'Strawberry', 'Kiwi'];
      const lastFruit = fruits.pop();

      console.log(lastFruit);
      // Output: 'Kiwi'

      console.log(fruits);
      // Output: ['Apple', 'Banana', 'Grape', 'Strawberry']      
      `
    },
    {
      name: 'Array.push( )',
      description:
        'Adds one or more elements to the end of an array, returns new length of the array.',
      mutability: 'Mutable',
      returnType: 'Integer',
      editor: `
      const fastFood = ['Burger King', 'Taco Bell', 'McDonalds', 'Chic-Fil-A'];
      const totalFastFood = fastFood.push('Popeyes');

      console.log(totalFastFood);
      // Output: 5

      console.log(fastFood);
      // Output: ['Burger King', 'Taco Bell', 'McDonalds', 'Chic-Fil-A', 'Popeyes']
      `
    },
    {
      name: 'Array.splice( )',
      description: 'Changes an array by removing or replacing existing elements and/or adding new elements in place.',
      mutability: 'Mutable',
      returnType: 'Array',
      editor: `
      const months = ['Jan', 'March', 'April', 'June'];

      months.splice(1, 0, 'Feb');
      // Inserts 'Feb' at index 1
      console.log(months);
      // Output: ['Jan', 'Feb', 'March', 'April', 'June']

      months.splice(4, 1, 'May');
      // Replaces 1 element at index 4
      console.log(months);
      // Output: ['Jan', 'Feb', 'March', 'April', 'May']

      months.splice(2, 1);
      // Removes 1 element starting at position 2
      console.log(months);
      // Output: ['Jan', 'Feb', 'April', 'May']
      `
    },
    {
      name: 'Array.slice( )',
      description: 'Shallow copies portion of an array into a new array, from start to end.',
      mutability: 'Immutable',
      returnType: 'Array',
      editor: `
      const presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe']
      
      const removed = presidents.slice(1,2);
      // Output: ['Adams']
      `
    },
    {
      name: 'Array.toString( )',
      description: 'Converts an array and its elements into a string.',
      mutability: 'Immutable',
      returnType: 'String',
      editor: `
      const words = ['The', 'cow', 'jumped', 'over', 'the', 'moon'];
      console.log(words.toString());

      // Output: 'The,cow,jumped,over,the,moon'
      `
    }
  ],
  stringMethods: [
    {
      name: 'String.toLowerCase( )',
      description: 'turns first letter of string to lower case',
      mutability: 'mutable',
      editor: ''
    },
    {
      name: 'String.toUpperCase( )',
      description: 'turns first letter of string to upper case',
      mutability: 'mutable',
      editor: ''
    },
    {
      name: 'String.concat( )',
      description: 'concats strings, duh',
      mutability: 'mutable',
      editor: ''
    }
  ],
  objectMethods: [],
  mathMethods: [],
  dateMethods: [],
  numberMethods: []
}
