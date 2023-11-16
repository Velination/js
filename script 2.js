//  fundamentals of js 2 
//  activating strict mode

'use strict';
// // it helps you know if there is a bug in your code

// // funtion is a piece of code that we can reuse multiple time and can hold chucks of code 

// function logger(){
//     console.log('My name is Jonas')
// }
// // calling  /running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log (apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//  const appleJuice = fruitProcessor(5,0);
// console.log (appleJuice);

// // function declaration and expression
// // function declaration 
// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }
// const year1 = calcAge1(2021);
// console.log(year1);

// // function expression 
// const calcAge2 = function (birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }
// const year2 = calcAge2(1998);
// console.log (year2,year1)

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1803);
// console.log(age3);

// // more lines if code 
// const yearUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// } 
// console.log(yearUntilRetirement(1991));

// // wen you have more variables
// const yearUntilRetirement2 = (birthYear , firstName) => {
//     const age = 2037 -birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in  ${retirement} years`;
// }
//  console.log (yearUntilRetirement2(1991, 'Alex'));
//  console.log (yearUntilRetirement2(1996, 'john'));

// // functions calling other functions
// function cutPieces (fruit) {
//     return fruit * 4;
// };


// function fruitProcessor(apples, oranges){
//     // console.log (apples, oranges);
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
//  const appleJuice2 = fruitProcessor(5,8);
// console.log (appleJuice2);

// coding challenge 1
// const calcAverage = scores =>(scores / 3);
// const avgDolphinsScore = calcAverage(44 + 23 + 71);
// const avgKoalasScore = calcAverage(65 + 54 + 49);
// console.log(avgDolphinsScore, avgKoalasScore);

// function checkWinner (dolphinsScore, koalasScore){
//    const avgDolphinsScore = calcAverage(dolphinsScore);
//    const avgKoalasScore = calcAverage(koalasScore);

//    if (avgDolphinsScore  >= avgKoalasScore * 2){
//     return (`Dolphines win (${avgDolphinsScore} vs ${avgKoalasScore})`)
// //    }else if(avgKoalasScore >= avgDolphinsScore * 2 ){
// //       return (`Koalas win (${avgDolphinsScore} vs ${avgKoalasScore})`)
// //    } else {
// //     return  (`No team wins(${avgDolphinsScore} vs ${avgKoalasScore})`)
// //    };

// // }
// // const challenger = checkWinner((44 + 23 + 71) , (65 + 54 + 49));
// // console.log(challenger);
 
// //  Arrays
// // Array is like a container that you can use to store many things or item 
// const friends = ['joe' , 'john' , 'faith'];
// console.log(friends);

// // Another way to write it 
// const years = new Array(1991, 1985, 1976, 2668);

// // How to call the names out of the array 
// console.log(friends[0]); //=> joe
// console.log(friends[2]); //=> faith

// console.log(friends.length);
// console.log(friends[friends.length - 2]);

// // To change an input inside the array 
// friends[2] = 'jay';
// console.log(friends);

// const firstName = 'jonas'
// const jonas = [firstName, 'ife', 2037 - 1998, 'teacher', friends];
// console.log(jonas);


// // Exercise
//  function calcAge (birthYear){
//     return 2037 - birthYear;
// }
// const birthYear = [1988, 1995, 1994, 1985, 1965];
// const age1 = calcAge(birthYear[0]);
// const age2 = calcAge(birthYear[1]);
// const age3 = calcAge(birthYear[birthYear.length - 1]);

// console.log(age1, age2, age3);
// const ages = [calcAge(birthYear[0]), calcAge(birthYear[1]), calcAge(birthYear[birthYear.length - 1])];
// console.log(ages);

// // Basic array operations (METHODS)
// // To add an elememt into the array at the end of the array ...you will use the method 'push'

// const friend = ['micheal', 'joe', 'sonia'];
// const length = friend.push('jay');
// console.log(friend);
// console.log(length);

// // we want to put the element in the front of the array 
// friend.unshift('dimeji');
// console.log(friend)

// // we want to remove element from the array
// friend.pop() // the last element from the array
// friend.pop(); 
// const popped = friend.pop(); // returned the removed element 
// console.log(popped);
// console.log(friend);

// friend.shift(); // remove first 
// console.log(friend);

// console.log(friend.indexOf('steven'));
// console.log(friend.indexOf('micheal'));

// console.log(friend.includes('steven'));
// console.log(friend.includes('micheal'));

// if (friend.includes('micheal')){
//    console.log('Yes you have a friend called micheal');
// }

// coding challenge 2

// function calcTip (value){
//     if(value >= 50 && value <= 300){
// return value * 0.15;
// }else{
//     return value * 0.20;
// }
// }
// // const value = 100;
// // console.log (calcTip(value)); 

// // test 2
// const value = [125, 555, 44];
// const bills1 = calcTip(value[0]);
// const bills2 = calcTip(value[1]);
// const bills3 = calcTip(value[2]);
// const tips = [bills1, bills2, bills3];
// const total = [(tips[0] + value[0]), (tips[1] + value[1]), (tips[2] + value[2])];
// console.log(total);

// Object 
// // you can write an array like this too
// const jonas = {
//     firstName: 'jonas',
//     lastName: 'atere',
//     age: 2023 - 1998,
//     job: 'web developer',
//     friends: ['dimeji','ore', 'sonia']
// };
// // console.log(jonas);

// // // first way of getting a property from an object is to use the dot notation 
// // console.log(jonas.lastName);
// // // another way 
// // console.log(jonas['lastName']);

// // // when you can use bracket
// // const instrestedIn = prompt('What will you like to know about jonas? choose between firstName, lastName, age,job and friends');


// // // to put things into the expression
// // jonas.location = 'lagos';
// // jonas['snapchat'] = '@velination';
// // console.log(jonas[instrestedIn]);

// // challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
        firstName: 'jonas',
        lastName: 'atere',
        birthYear: 1998,
        job: 'web developer',
        friends: ['dimeji','ore', 'sonia'],
        hasDriverLicense: true,
    
    // calcAge: function (){
    //     return 2023 - this.birthYear;
    // } // this is called a function value 
    
    calcAge: function (){
        this.age = 2023 - this.birthYear;
        return this.age;
    }
    };
     console.log(jonas.calcAge());
    console.log (jonas.age);
    console.log (jonas.age);
    console.log (jonas.age);