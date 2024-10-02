// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    person: 'Max',
    age: 23,
};
// An array of object with person and age props
var people;
// Type inference
var course = 'React - The Complete Guide';
// Is a powerfull typescript feature that recognize automaically the type of a value,
// at the moment od initialization, so further it recognize that the type to use,
// without manually specify the type like the follow code:
var game;
// UNION TYPE
// UNION is a definition type that allow more than one definition type.
var book = 'This is a book';
book = 'BookName';
// Alias Type is a Type definition that allow to give a custom name type to a frequently
// used data structure, for example:
var car;
var myNewCar = {
    brandName: 'Ferrari',
    color: 'red',
};
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, 100);
console.log('@@@');
