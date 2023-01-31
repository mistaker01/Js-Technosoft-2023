let mySentence='Javascript is a scripting language, primarily designed for adding interactivity to web pages and web applications.Before jQuery was developed, the web developers created their own custom frameworks in javascript. This allowed them to work around specific bugs, it reduces the time to work with common bugs.'
let myAnswer=0
let myFirstCondition= mySentence.length >100;
let mySecondCondition= mySentence.startsWith('Javascript');

myResult=myFirstCondition || mySecondCondition  ? 25 : 35
console.log (`myResult`) 