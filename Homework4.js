/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = 'John Gig';
userName1_Split=userName1.split('john Gig');
let myResult=userName1.split.length===2
console.log(`His name is ${userName1} `);




/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * 
 * 
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
//let sentence2 = 'you NEVEr waLK aLOne'
//let abbr = '';
// code
//console.log(`abbr -> ${abbr}`);     // YNWA

let word1="Good morning to You"  
let uppercase_word1= word1.toUpperCase()
let split_word1=uppercase_word1.split('')
split_word1[0]=split_word1[0].substring(0,1).toLowerCase()+split_word1[0].substring(1);
split_word1[1]=split_word1[1].substring(0,1).toLowerCase()+split_word1[1].substring(1);
split_word1[2]=split_word1[2].substring(0,1).toLowerCase()+split_word1[2].substring(1);
split_word1[3]=split_word1[3].substring(0,1).toLowerCase()+split_word1[3].substring(1);

word1=split_word1[0]+ ' '+ split_word1[1] +' ' + split_word1[2]+' ' + split_word1[3];
console.log(`${word1}`); 

/**
 * Q3: Count the number of words in the sentence
 */

let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let sentenceSplit=sentence3.split(' ')
let numberOfWords=sentenceSplit.length   
console.log (numberOfWords);