==TEST IF THE JS HAS READ== 
alert('Hello World');
console.log('Hello World!');
console.warn('Check the bug to your system!');
console.error('There has an error to your code.');


==VARIABLES==
var firstname = "Jikko";
var firstname = "Jayla";
console.log(firstname);

let firstname = "Jikko";
let firstname = "Jayla";
firstname = "Jayla";
console.log(firstname);

const firstname = "Jikko";
const firstname = "Jayla";
firstname = "Jayla";
console.log(firstname);



==DATA TYPES==
String, Numbers, Boolean, Null, Undifined

const name = "Jay Wald";
const age = 31;
const rating = 95.5;
const isComplete = true;
const value = null;
const unk = undefined;

console.log(typeof unk);
let btn = ('#btnId');
let birthplace;
birthplace = "Tandag City";
console.log(birthplace);
console.log(typeof birthplace); //string

==OLD WAY TO CONCATINATE==
const firstname = "Jikko";
const age = 3;

let string = "My name is " + firstname + " and my age is " + age + ".";
console.log(string);

==NEW WAY TO CONCATINATE==
const firstname = "Jikko";
const age = 3;

let string = `My name is ${firstname} and my age is ${age}`;
console.log(string);
console.log(firstname.length);
console.log(firstname.toLocaleLowerCase(firstname));
console.log(firstname.toLocaleUpperCase(firstname)); 



==ARRAY==
const fruits = ['mango', 'banana', 'grapes', 'apple']
fruits[4] = 'orange';   ==ADDING NEW ARRAY==
fruits.push('lemon');     ==ANOTHER WAY TO ADD AN ARRAY==
fruits.unshift('pineapple');     ==ADDED TO THE FIRST==

fruits.pop();      ==DELETE THE LAST ARRAY==
console.log(fruits);
console.log(Array.isArray(fruits));   ==CHECKING IF THE ARRAY IS VARIABLE==
console.log(fruits.indexOf('banana'));    ==CHECKING THE NUMBER OF ARRAY IS==
fruits.splice(1,1);              ==REMOVING THE 2ND ARRAY==
console.log(fruits);



OBJECT LITERALS
const person = {
    firstName: 'Jikko',
    lastName: 'Luna',
    age: 19,
    favorites: ['toys','colors','bike','foods'],
    familyMembers: {
        father: 'Jay Wald',
        mother: 'Jevacris',
        sister: 'Jayla'
    }
};

console.log(person.firstName, person.lastName);
console.log(person.favorites[3]);
console.log(person.familyMembers.mother);

const contacts = [
    {
        id: 1,
        fullName: 'Jikko Luna',
        isSaved: 'Phone'
    },
    {
        id: 2,
        fullName: 'Chornito Luna',
        isSaved: 'USB'
    },
    {
        id: 3,
        fullName: 'Japeth Mandaguio',
        isSaved: 'SD'
    }
];

console.log(contacts);
console.log(contacts[2].fullName);




LOOOPS
const contacts = [
        {
            id: 1,
            fullName: 'Jikko Luna',
            isSaved: 'Phone'
        },
        {
            id: 2,
            fullName: 'Chornito Luna',
            isSaved: 'Phone'
        },
        {
            id: 3,
            fullName: 'Jayla Mirielle',
            isSaved: 'SD'
        }
    ];

    For Loop
for( let i = 0; i <= 10; i++) {
    console.log(i);
}

const contactFullName = contacts.map(function(contact) {
    return contact.fullName;
});

console.log(contactFullName);

const contactPhone = contacts.filter(function(contact) {
    return contact.isSaved == 'Phone';
});

console.log(contactPhone);

for( let i = 0; i < contacts.length; i++) {
    console.log(contacts[i].fullName);
}

for (let contact of contacts) {
    console.log(contact.fullName);    ==MUCH OPTIMIZE==
}

    ForEach
contacts.forEach(function(contact) {
    console.log(contact.fullName);             ==FOREACH==
});

    While Loop
let i =0;
while (i < 10) {
    console.log(`While Loop value is ${i}`);
    i++;
}