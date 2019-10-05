// const first = "nate";
// const last = "couch";
// const arr = [33, 25, 44, 13, 63, 85, 8, 97];
// const phone = 8644149726;
// let val;

// /* test */

// val = arr.sort(function(a, b) {
//   return b - a;
// });

// function under50(num) {
//   return num < 50;
// }
// val = arr.find(under50);
// console.log(val);

// val = arr.sort();
// val = arr.reverse();
// console.log(val);

// const has7 = () => {
//   if (arr.join().includes(7)) {
//     return "contains 7";
//   } else {
//     return "does not contain 7";
//   }
// };

// val = has7();

// console.log(val);

// /* DATE AND TIME */

// const today = new Date();
// const birthday = new Date("11-19-1981");

// val = today;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); /*time since epoch*/

// birthday.setMonth(10);
// birthday.setDate(11); /*etc...*/

// console.log(birthday);

// const id = 100;

// /* TEST IF UNDEFINED*/

// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("No ID");
// }

// /* SWITCH */

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log(`today is ${day}`);

// /* FUNCTION DECLARATION (setting default paramaters) */

// function greet(firstName = "Nate", lastName = "Couch") {
//   return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet())(
//   /* IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IFFEs */

//   function() {
//     console.log("IFFE ran...");
//   }
// )(); //extra parenthesis needed

// /* IFFE WITH PARAMETER */

// (function(name) {
//   console.log("Hello " + name);
// })("Nate");

// let sent1 = "hello, this is a sentence";
// let sent2 = "stk rqd, pdfskt kklsnvc";

// const vowel = str => {
//   //these are vowels we want to check for
//   const check = ["a", "e", "i", "o", "u"];
//   //keep track of vowels
//   var count = 0;
//   for (let char of str.toLowerCase()) {
//     //check if each character in string is in vowel array
//     if (check.includes(char)) count++;
//   }
//   if (count !== 0) {
//     return "has a vowel";
//   } else {
//     return "does not have a vowel";
//   }
//   return count;
// };

// console.log(vowel(sent1));

const numberArgs = (...args) => args.length;

console.log(numberArgs(1, 2, 3, 3, 3, 3));
