// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  person: string;
  age: number;
};

person = {
  person: 'Max',
  age: 23,
};

// An array of object with person and age props

let people: {
  person: string;
  age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

// Is a powerfull typescript feature that recognize automaically the type of a value,
// at the moment od initialization, so further it recognize that the type to use,
// without manually specify the type like the follow code:
let game: string;

// UNION TYPE

// UNION is a definition type that allow more than one definition type.

let book: string | number | boolean = 'This is a book';

book = 'BookName';

// Alias Type is a Type definition that allow to give a custom name type to a frequently
// used data structure, for example:

let car: {
  brandname: string;
  color: string;
};

// insted we can create an alias type for the structure data which a car should have:

type Car = {
  brandName: string;
  color: string;
};

const myNewCar: Car = {
  brandName: 'Ferrari',
  color: 'red',
};

// Generics
// It simply helps you write functions in this case,
// which are type safe yet flexible.
// they work with any type, but when a certain type is used for that function,
// that function is locked in and known.
// And it gives you type safe and flexibility.

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

// Usando i generics nella definizione della funzione, qui, al momento dell'invocazione di tale funzione,
// typescript andrà a leggere i tipi degli argomenti della funzione, per capire come trattare i valori
// dei paramentri durante l'invocazione, e segnalare possibili errori.
const updatedArray = insertAtBeginning(demoArray, 100);

console.log('@@@');
