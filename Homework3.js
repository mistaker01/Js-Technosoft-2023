const mySentence= 'Java Script originated from within the labs of Netscape Communications Corporation in 1994.this wonderful new language called JavaScript'
console.log (`mySentence ${mySentence}`);

let mySentence_Replace=mySentence.replace(/A/ig, 'JAVA,SCRIPT');
console.log (`my sentence replace > &{mySentence_Replace}`);


const mySentence_2= 'Java Script originated from within the labs of Netscape Communications Corporation in 1994.this wonderful new language called JavaScript'
let mySentence_2_length= mySentence_2.length
console.log (`length of mySentence_2 > ${ mySentence_2_length}`)

mySentence_2_UPPER_CASE= mySentence_2.toUpperCase
let mySentence_2_UPPER_CASE= mySentence_2.toUpperCase('java')
console.log (`now my sentence begin with > ${mySentence_2_UPPER_CASE}`);


let mySentence_2_endsWith= mySentence_2.endsWith('JavaScript');
console.log (`my sentence does ends with . ${mySentence_2_endsWith}`);

mySentence_2_includesFrom=mySentence_2.includes;
let mySentence_2_includesFrom=mySentence_2.includes('from');
console.log (` my sentence have ${mySentence_2_includesFrom}`);

let charAt_97=mySentence_2.charAt(97);
console.log (`At word 97 has  ${charAt(97)}`);
