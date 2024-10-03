# Working with Different Data Types in the Connector

This guide explains how to work with various data types using the connector. 

## Important Notes:

1. Strings, numbers, arrays, and objects will be stored and retrieved without changes.
2. When saving complex objects (e.g., with methods or specific prototypes), only the data will be stored, not the methods.
3. When working with dates, ensure proper formatting before saving and after retrieval, as they may be serialized as strings.

## Examples:

### 1. Strings, Numbers, Arrays, and Objects:

These data types are saved and returned without modifications.

```javascript
// String
await Connector.put('main', 'key1', 'Hello, World!');
const string = await Connector.get('main', 'key1');
console.log(string); // Output: Hello, World!

// Number
await Connector.put('main', 'key2', 42);
const number = await Connector.get('main', 'key2');
console.log(number); // Output: 42

// Array
await Connector.put('main', 'key3', [1, 2, 3, 4, 5]);
const array = await Connector.get('main', 'key3');
console.log(array); // Output: [1, 2, 3, 4, 5]

// Object
await Connector.put('main', 'key4', { name: 'John', age: 30 });
const object = await Connector.get('main', 'key4');
console.log(object); // Output: { name: 'John', age: 30 }
```

### 2. Complex Objects:

When saving complex objects, only the data will be stored, not the methods.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new Person('John', 30);

await Connector.put('main', 'person', john);
const retrievedJohn = await Connector.get('main', 'person');

console.log(retrievedJohn); // Output: { name: 'John', age: 30 }
console.log(retrievedJohn instanceof Person); // Output: false
console.log(retrievedJohn.greet); // Output: undefined
```

### 3. Dates:

Dates may be serialized as strings, so it's recommended to format them before saving and after retrieval.

```javascript
const date = new Date();

// Saving date as Unix timestamp (milliseconds)
await Connector.put('main', 'date1', date.getTime());

// Saving date as ISO string
await Connector.put('main', 'date2', date.toISOString());

// Retrieving and converting back to Date object
const retrievedTimestamp = await Connector.get('main', 'date1');
const dateFromTimestamp = new Date(retrievedTimestamp);

const retrievedISOString = await Connector.get('main', 'date2');
const dateFromISOString = new Date(retrievedISOString);

console.log(dateFromTimestamp);
console.log(dateFromISOString);
```

## Additional Recommendations:

1. When working with large volumes of data or complex structures, consider serializing the data to JSON before saving:

```javascript
const complexData = { /* ... */ };
await Connector.put('main', 'complexData', JSON.stringify(complexData));

const retrievedData = await Connector.get('main', 'complexData');
const parsedData = JSON.parse(retrievedData);
```

2. If you're working with binary data (e.g., files), you can save them as `Uint8Array`:

```javascript
const binaryData = new Uint8Array([1, 2, 3, 4, 5]);
await Connector.put('main', 'binaryData', binaryData);

const retrievedBinaryData = await Connector.get('main', 'binaryData');
console.log(retrievedBinaryData); // Output: Uint8Array [1, 2, 3, 4, 5]