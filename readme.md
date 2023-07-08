## Site Preview

[Click here to preview](https://sawruh.github.io/quote-machine/)

Lesson 1: Note: Class (properties, methods)

class Human {

// properties/ adjective
name: String;
eyes: Number;
hair: String;
skinColor: String;
age: Number;
language: String;

constructor (name, eyes, hair, skinColor, age, language) {

    this.name = name;
    this.eyes = eyes;
    this.hair = hair;
    this.skinColor = skinColor;
    this.age = age;
    this.language = language;
     breathe();
    cry();

}

// methods/ action
talk(topic) {

}

walk() {

}

eat() {

}

breathe() {

}

cry() {

}

}

instantiate: after creating a class you have to make it work. So, how do you make it work? => By creating an object based on the class.
Note: create a clone (object) based on the values included in the sterotype (class).

example; here, objects are human1 and human2. To use the object (human1 and human2) as variable we use const.

1. const human1 = new Human('Hinata', 2, 'black', 'white', 0, 'Newari');
2. const human2 = new Human('Naruto', 2, 'yellow', 'white', 0, 'Nepali');

human1.walk();

human1.name;

Hinata {
name: 'Hinata',
eyes: 2,
hair: 'black',
skinColor: 'white',
language: 'Newari',

}

Lesson 2: Use of Array

class QuoteDetails {
quote: string,
quoter: string,
bg: string,

    constructor(quote, quoter, bg) {
        this.quote = quote;
        this.quoter = quoter;
        this.bg = bg;
    }

}

const newQuote = new QuoteDetails("Winning isn’t everything, but wanting to win is.", "Vince Lombardi", "aqua");

newQuote => {
quote: "Winning isn’t everything, but wanting to win is.",
quoter: "Vince Lombardi",
bg: "aqua",
},
