export const data = {
  arrayMethods: [
    {
      name: "Array.concat()",
      description: "Merges two or more arrays.",
      mutability: 'Immutable',
      returnType: 'Array',
      editor: `
      const array1 = ['a','b','c'];
      const array2 = ['d','e','f'];
      const array3 = array1.concat(array2);
      console.log(array3);
      `,
    },
    // {
    //   name: "Array.from()",
    //   description: "Creates new, shallow copied array from another array-like iterable object.",
    //   mutability: 'immutable',
    //   editor: ``,
    // },
    // {
    //   name: "Array.entries()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.every()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.fill()",
    //   description: "blah blah blah",
    //   editor: "let Array.fill(12)",
    // },
    // {
    //   name: "Array.filter()",
    //   description: "blah blah blah",
    //   editor: `array.filter(item => {
    //     item.length > 5
    //   });`,
    // },
    {
      name: "Array.find()",
      description: "Returns value of the first element that satisfies the provided testing function.",
      mutability: 'n/a',
      returnType: 'variant',
      editor: `
      const array1 = [5, 12, 8, 75, 100];
      const found = array1.find(num => num > 10);
      console.log(found)
      `,
    },
    // {
    //   name: "Array.forEach()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.includes()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.map()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.lastIndexOf()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.join()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.keys()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.reduce()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    {
      name: "Array.shift()",
      description: "Removes first element from an array and returns the removed element",
      mutability: 'Mutable',
      returnType: 'removed element', 
      editor: `
      const sports = ['soccer', 'football', 'hockey', 'tennis'];
      const firstElement = sports.shift() 
      console.log(firstElement);
      `,
    },
    {
      name: "Array.unshift()",
      description: "Adds one or more elements to the beginning of an array and retuns new length of the array.",
      mutability: 'Mutable',
      returnType: 'Integer',
      editor: `
      const sports = ['soccer', 'hockey', 'football', 'baseball']
      console.log(sports.unshift('tennis', 'golf'))
      console.log(sports)
      `,
    },
    {
      name: "Array.pop()",
      description: "Removes the last element from an array and returns that element",
      mutability: 'Mutable',
      returnType: 'removed element',
      editor: `
      const fruits = ['apple', 'banana', 'grape', 'strawberry', 'kiwi']
      console.log(fruits.pop())
      `,
    },
    {
      name: "Array.push()",
      description: "Adds one or more elements to the end of an array, returns new length of the array.",
      mutability: 'Mutable',
      returnType: 'Integer',
      editor: `
      const fruits = ['apple', 'banana', 'orange', 'mango']
      console.log(fruits.push('watermelon'))
      `,
    },
    // {
    //   name: "Array.splice()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    // {
    //   name: "Array.slice()",
    //   description: "blah blah blah",
    //   editor: "let pigs.concat() things and stuff",
    // },
    {
      name: "Array.toString()",
      description: "Converts an array and its elements into a string.",
      mutability: 'Immutable',
      returnType: 'String',
      editor: `
      const words = ['the', 'cow', 'jumped', 'over', 'the', 'moon'];
      console.log(words.toString());
      `,
    },
  ],
  stringMethods:[
    {
        name: "String.toLowerCase()",
        description: "turns first letter of string to lower case",
        mutability: 'mutable',
        editor: ``,
      },
    {
        name: "String.toUpperCase()",
        description: "turns first letter of string to upper case",
        mutability: 'mutable',
        editor: ``,
      },
    {
        name: "String.concat()",
        description: "concats strings, duh",
        mutability: 'mutable',
        editor: ``,
      },
  ],
  objectMethods: [],
  math: [],
  timeAndDate: [],
  readFile: []
};
