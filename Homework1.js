// F  > C 
// T(°C) = (T(°F) - 32) / 1.8
let fTemp= 47

let cTemp= (fTemp-32)/1.8

console.log(`\n${fTemp}°F is equals to ${cTemp}°C`);  



//F>K 
//T(K) = (T(F) + 459.67)*  5/9
let kTemp= (fTemp+ 459.67)*  5/9
console.log(`\n${fTemp}°F is equals to ${kTemp}°C`);  


//C>K 
//T(K) = T(°C) + 273.15 
let kTempture= ( cTemp + 459.67)*  5/9
console.log(`\n${kTemp}°F is equals to ${cTemp}°C`); 


//K>F 
//T(°F) = T(K) × 9/5 - 459.67
let kTempruture= 47
let fTempruture = (kTempruture) * 9/5 - 459.67
console.log(`\n${fTempruture}°F is equals to ${ kTempruture}°K`); 
