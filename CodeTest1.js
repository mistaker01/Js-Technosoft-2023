/**
 * Q1: Write code to remove given value from the given array
 * Points: 30
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */
const array = [1,2,3,4,5];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { 
  array.splice(index,2); // 
}

 array = [21, 32, 12, 43, 45, 65, 12]
console.log(array);
const index2 = array.indexOf(lastindex);
if (index > -1) { 
  array.splice(index,lastindex);
}


//Q2: Write code to calculate the total of all balances in the accounts-array

2345

    if (accounts[0].accountNumber === 2345)
       console.logaccounts[0].balance
      

    if (accounts[1].accountNumber === 2345)
    console.logaccounts[1].balance
        

    if (accounts[2].accountNumber === 2345)
        console.logaccounts[2].balance
      
    
    if (accounts[3].accountNumber === 2345)
        console.logaccounts[3].balance
       
    if (accounts[4].accountNumber === 2345)
     console.logaccounts[4].balance
      
  
    if (accounts[lastIndex].accountNumber === 2345)
    console.logaccounts[lastIndex].balance
       

const accounts = [
    {
        accountNumber: 1234,
        balance: '$1000'
    },
    {
        accountNumber: 2345,
        balance: '$2000'
    },
    {
        accountNumber: 3456,
        balance: '$3000'
    },
    {
        accountNumber: 4567,
        balance: '$4000'
    },
    {
        accountNumber: 5678,
        balance: '$5000'
    },
]
let isAccountFound = false;
for (let i=0 ; i<=accounts.length-1 ; i++) {
    if (accounts[i].accountNumber === 15000) {
        isAccountFound = true;
        console.log(accounts[i].balance);
        break;
    }
}
if (!isAccountFound) {
    console.log('No account is available with given account-number');
}


/**3
 * Write code to find the index of second-occurrence of 'baSeBalL' (ignoring cases) in the arr3-array
 * if baseball is not present twice or more in the array; code should ans -1
 * otherwise code should ans the index of second-occurrence of baseball in arr3-array*/


const arr3 = ['FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];

console.log( arr3 =slice(5));


console.log( arr3 =slice(2, 4));


console.log( arr3 =slice(1, 5));


console.log( arr3 =slice(-2));


console.log( arr3 =slice(2, -1));

console.log( arr3 =slice());
