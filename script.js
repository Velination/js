/*let js = "amazing";
console.log(40+8+23-10);

console.log("jonas");
console.log(23);

// To comment
/* multi line comment 
let firstname = "john ";
console.log(firstname);
let PI = 3.1415;
console.log(PI);

let javaScriptIsFun =true;
console.log (javaScriptIsFun);

console.log (typeof ture);
console.log (typeof "john");
console.log (typeof javaScriptIsFun);
console.log (typeof 23);

// To change a variable you dont need to use let again 
javaScriptIsFun = 26;
console.log (typeof javaScriptIsFun);

const now =2023;
const ageJonas = now - 1997;
const ageSarah = now - 1996;
console.log(ageJonas, ageSarah);

const firstName = "jonas";
const lastName = "atere";
console.log(firstName + ' ' + lastName);

let x = 10+5;
x +=10;//x = x+10 = 25
console.log(x);*/

/* coding challenger one 
//Test 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const marksBmi = markWeight/(markHeight * markHeight);
const johnBmi = johnWeight/(johnHeight * johnHeight);
markHigherBmi = (marksBmi > johnBmi);
console.log(markHigherBmi );

//Test 2
const markWeight2= 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const marksBmi2 = markWeight2/(markHeight2 * markHeight2);
const johnBmi2 = johnWeight2/(johnHeight2 * johnHeight2);
markHigherBmi2 = (marksBmi2 > johnBmi2);
console.log(markHigherBmi2);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

console.log(`string with
    multiple 
    lines`);
    const age = 05;
    const isOldEnough = age >=18;
    if(isOldEnough){
        console.log('sarah can apply for her liecense ')
    }else {
        const yearsLeft = 18 - age;
        console.log(`sarah is too young, wait another ${yearsLeft} years`);
    }

    const year = 1998;
    
    if(year >= 2000){
   console.log(century = 21)
    } else {
       console.log(century = 20);
    }; */

    // coding chanllenge 2

//     const markWeight = 78;
//     const markHeight = 1.69;
//     const johnWeight = 92;
//     const johnHeight = 1.95;

// //     const markWeight= 95;
// // const markHeight = 1.88;
// // const johnWeight = 85;
// // const johnHeight = 1.76;

// const marksBmi = markWeight/(markHeight * markHeight);
// const johnBmi = johnWeight/(johnHeight * johnHeight);
//  if ( marksBmi > johnBmi){
//     console.log(`Mark's BMI (${marksBmi}) is higher than John's (${johnBmi})!`)
//  } else{
    
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's (${marksBmi})!`)
//  }

//type conversion
// const inputYear = 1991;
// console.log(Number(inputYear));

// console.log(Number('jonas'));

// console.log(String(23));

// // type coercion
// console.log('I am ' + 23 + ' ' + 'years old');
// console.log(23 - '10' + '3');

// 5 falsy value: 0; '', undefined, null, NaN

// let height = '';
// if(height){
//     console.log('YAAY! Height is defined')
// } else{
//     console.log('Height is nulled')
// };

//Equality operators

// const age = 18; 
// if(age === 18){
//     console.log('You justr began an adult')
// };

// const fav =Number( prompt ("what's your fav number"));
// console.log(fav);
// console.log(typeof fav);

// if (fav == 28 ){
//     console.log ('28 is an amazing number ')
// }else if (fav === 7){
//     console.log('7 is also a cool number')
// } else {
//     console.log('numbers are not 28 and 7 ')
// }

// if (fav !== 28){
//     console.log ('why not 28')
// };

// boolean logic

// operator : AND, OR & NOT

// const hasDriverLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriverLicense && hasGoodVision); // AND
// console.log(hasDriverLicense || hasGoodVision); // OR
// console.log(!hasDriverLicense); // NOT

// if (hasDriverLicense || hasGoodVision){
//     console.log('Sarach is able to drive')
// } else {
//     console.log('Someone else should drive..');
// }

// const isTired = true; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if (hasDriverLicense || hasGoodVision || !isTired){
//     console.log('Sarach is able to drive')
// } else {
//     console.log('Someone else should drive..');
// } 97, 112 and 101. Koalas score 109, 95 and 123
//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageDolphins = (97 + 112 + 101)/ 3;
//  console.log(averageDolphins);
// const averageKoalas = (109 + 95 + 123) / 3;
//  console.log(averageKoalas);
// console.log(averageDolphins > averageKoalas);

// if (averageDolphins === averageKoalas){
//     console.log('The competition ended in a draw')
// } else if (averageDolphins > averageKoalas){
//     console.log('Dolphins will the competition✨ ')
// } else {
//     console.log('Koalas are the winners of the competition')
// };

// Bonus 1 & 2

// const averageDolphins = (97 + 75 + 101)/ 3;
//  console.log(averageDolphins);
// const averageKoalas = (97 + 75 + 101) / 3;
//  console.log(averageKoalas);
// console.log(averageDolphins > averageKoalas);

// if (averageDolphins === averageKoalas && averageDolphins >= 100 && averagekoalas >= 100){
//     console.log('The competition ended in a draw')
// } else if (averageDolphins > averageKoalas && averageDolphins >= 100){
//     console.log('Dolphins will the competition✨ ')
// } else if(averageDolphins < averageKoalas && averageKoalas >= 100){
//     console.log('Koalas are the winners of the competition')
// } else{
//     console.log ('There was no clear winner ')
// };

// Bonus 2

// const averageDolphins = (97 + 112 + 101)/ 3;
//  console.log(averageDolphins);
// const averageKoalas = (109 + 95 + 123) / 3;
//  console.log(averageKoalas);
// console.log(averageDolphins > averageKoalas);

// if (averageDolphins === averageKoalas && averageDolphins >= 100){
//     console.log('The competition ended in a draw')
// } else if (averageDolphins > averageKoalas && averagekoalas <= 100){
//     console.log('Dolphins will the competition✨ ')
// } else if() {
//     console.log('Koalas are the winners of the competition')
// };

//  switch function

// const day = 'wednesday';
// switch(day){
//     case 'monday':
//         console.log('i love you ');
//         break;
//     case 'tuesday':
//     console.log('why always me ');
//     break;
//     case 'wednesday':
//         case'thrusday':
//         case'friday':
//         console.log('i love fridays');
//         break;
//     case 'saturday ':
//         case 'sunday':
//             console.log('enjoy your weekend');
//             break;
//             default:
//                 console.log('Not a valid day');

// }

// const day = 'wednesday';
// if (day === 'monday'){
//     console.log('its monday ');
// } else if (day === 'tuesday'){
//     console.log('its tuesday');
// }
// else if (day === 'wednesday'){
//     console.log('its wednesday');
// }

// statement and expression 


// const value = 0;
//  if (value >= 50 && value <=300){
//   bills = (value * 15) / 100
//   Total = (bills + value)
//    console.log (`The bill is ${value}, The tip is ${bills}, The total value is ${Total}` );
   
//  } else if (value <= 50  ){
//     bill = (value * 20)/ 100
//     Total = (bill + value)
//     console.log (`The bill is ${value}, The tip is ${bill}, The total value is ${Total}`);
//  }  
//  else if ( value >=300 ){
//     bill = (value * 20)/ 100
//     Total = (bill + value)
//     console.log (`The bill is ${value}, The tip is ${bill}, The total value is ${Total}`);
//  } else {
//     console.log ('you have not inputted a number ');
//  }

//  const bill = 40;
//  const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
//  console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);












