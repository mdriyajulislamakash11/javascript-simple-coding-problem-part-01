// // modiul 22 part 1

// // ________________________ module 22 part 01 _______________________/
// // 22-2 Unit Convert Inch to Feet, miles to kilometre
// //_________________ inch to fit ________________________/
function inchToFit(inch) {
      const fit = inch / 12;
      return fit
}
const inch = inchToFit(75);
console.log(inch);

// //____________ fit to inch _______________/

function fitToInch(fit) {
      const inch = fit * 6;
      return inch;
}
const fit = fitToInch(12);
// console.log(fit);

// //______________ miter to killomiter _____________/
function mileToKillo(mile) {
      const killo = mile * 1.609344;
      return killo;
}
const mile = mileToKillo(4);
// console.log(mile)

// //____________ killo meter to mile __________________/
function killomiterToMile(killo) {
      const mile = killo * 0.621371192;
      return mile
};
const killo = killomiterToMile(4);
// console.log(killo)

function inchTofit(inch) {
      const fit = inch / 12;
      const fit2 = parseInt(fit);
      const inchRemining = inch % 12;
      const result = fit2 + " fit " + inchRemining + " inch ";
      return result
}
const akashHeight = inchTofit(19);
// console.log(akashHeight)

// // ________________________ module 22 part 01 _______________________/
// // 22-3 Check whether a year is a Leap Year or not
// //_________________ Leap Year ________________________/

function isLepiyear(year) {
      if (year % 4 === 0) {
            return true;
      } else {
            return false;
      }
}
const isLipi = isLepiyear(2052);
// console.log(isLipi);


// // ________________________ module 22 part 01 _______________________/
// // 22-4 Calculate the average of the odd numbers in an array
// //_________________ average ________________________/
function averageMark (numbers){
      const odd = []
      for(const number of numbers ){
            if(number % 2 === 1){
                  odd.push(number)
            }
      }
      let sum = 0;
      for(const number of odd){
            sum = sum + number
      };
      const count = odd.length ;
      const aveg = sum / count;
      return aveg

};
const numbers = [12, 43, 52, 63, 34, 47, 79, 11, 77];
const avg = averageMark(numbers);
console.log(parseFloat(avg.toFixed(2)))

// //___________ even number avg ____________/
function averageMarkOfEven (numbers) {
      const even = [];
      for(const number of numbers){
            if(number % 2 === 0){
                  even.push(number)
            }
      }

      let sum = 0;
      for(const num of even){
            sum = sum + num
      }
      const count = even.length;
      const result = sum / count;
      return result;

};
const numbers = [98,96,94,70,98];
const averageNumber = averageMarkOfEven(numbers);
console.log(parseFloat(averageNumber.toFixed(2)));
// //________________________________________________________/.


// // ________________________ module 22 part 01 _______________________/
// // 22-5 Remove duplicate items from an array
const friends = ["akash", "samiul", "amir", "akash", "samiul", "sila", "nila"]
function dublicate(arr) {
      const Check = [];
      for(const name of arr){
            if(Check.includes(name) === false){
                  Check.push(name)
            }
      }
      return Check
};
const uniqe = dublicate(friends);
// console.log(uniqe);

// //_______________ double number check ____________________/
const numbers = [11 , 13, 44, 22, 55, 44, 11, 33, 55];
function doublicateNUmber (number) {
      const uniqe = [];
      for(const item of number){
            if(uniqe.includes(item) === false){
                  uniqe.push(item)
            }
      }
      return uniqe;
} 
const result = doublicateNUmber(numbers);
// console.log(result)
// //_____________________________________________/.



// // ________________________ module 22 part 01 _______________________/
// // 22-6 22-6 Math, abs, round, ceil, floor, and random number
// //____________ Math __________________/
// Math.abs() - পরম মান
console.log(Math.abs(-5)); // -5 এর পরম মান হবে 5
console.log(Math.abs(3));  // 3 এর পরম মান হবে 3

// Math.round() - রাউন্ডিং
console.log(Math.round(4.5)); // 4.5 রাউন্ড হয়ে 5 হবে
console.log(Math.round(4.4)); // 4.4 রাউন্ড হয়ে 4 হবে

// Math.ceil() - উপরে রাউন্ডিং
console.log(Math.ceil(4.1)); // 4.1 উপরে রাউন্ড হয়ে 5 হবে
console.log(Math.ceil(4.9)); // 4.9 উপরে রাউন্ড হয়ে 5 হবে

// Math.floor() - নিচে রাউন্ডিং
console.log(Math.floor(4.9)); // 4.9 নিচে রাউন্ড হয়ে 4 হবে
console.log(Math.floor(4.1)); // 4.1 নিচে রাউন্ড হয়ে 4 হবে

// Math.random() - এলোমেলো সংখ্যা তৈরি
console.log(Math.random()); // 0 এবং 1 এর মধ্যে একটি এলোমেলো সংখ্যা, যেমন 0.3255

// 0 থেকে 9 পর্যন্ত এলোমেলো সংখ্যা
console.log(Math.floor(Math.random() * 10)); // 0 থেকে 9 পর্যন্ত এলোমেলো সংখ্যা (int)

// 1 থেকে 100 পর্যন্ত এলোমেলো সংখ্যা
console.log(Math.floor(Math.random() * 100) + 1); // 1 থেকে 100 পর্যন্ত এলোমেলো পূর্ণসংখ্যা

// // ________________________ module 22 part 01 _______________________/
// // 22-7 A Simple introduction to JS Date and time
// নতুন Date() অবজেক্ট তৈরি
const currentDate = new Date(); // বর্তমান তারিখ ও সময়ের জন্য নতুন Date অবজেক্ট

console.log(currentDate); // বর্তমান তারিখ ও সময় দেখাবে

// কিছু বিশেষ তারিখ তৈরি করা:
const specificDate = new Date('2023-12-31'); // নির্দিষ্ট তারিখ (YYYY-MM-DD) এর একটি অবজেক্ট তৈরি
console.log(specificDate); // '2023-12-31T00:00:00.000Z' এর মতো কিছু দেখাবে

// Date থেকে বছরের মান বের করা:
console.log(currentDate.getFullYear()); // বর্তমান বছর, যেমন 2025

// Date থেকে মাসের মান বের করা (0-11 এর মধ্যে):
console.log(currentDate.getMonth()); // মাস, যেমন 0 মানে জানুয়ারি, 1 মানে ফেব্রুয়ারি

// Date থেকে দিনের মান বের করা:
console.log(currentDate.getDate()); // বর্তমান দিন, যেমন 5 (তারিখ 5)


// // ________________________ module 22 part 01 _______________________/
//  // 22-8 Swap variable, swap without temp, destructing
. স্বাভাবিক পদ্ধতিতে Swap (With Temp)
এখানে একটি তৃতীয় ভ্যারিয়েবল temp ব্যবহার করে দুইটি ভ্যারিয়েবলের মান পরিবর্তন করা হবে।

javascript
Copy code
let a = 5;
let b = 10;

// তৃতীয় ভ্যারিয়েবল temp ব্যবহার করে swapping
let temp = a;
a = b;
b = temp;

console.log("a:", a);  // আউটপুট: a: 10
console.log("b:", b);  // আউটপুট: b: 5
2. Temp ছাড়া Swap (Without Temp)
এখানে কোন তৃতীয় ভ্যারিয়েবল ব্যবহার করা হবে না, শুধু গাণিতিক পদ্ধতি (Arithmetic method) ব্যবহার করে swap করা হবে।

javascript
Copy code
let a = 5;
let b = 10;

// Temp ছাড়া swapping (গাণিতিক পদ্ধতি)
a = a + b;  // a এখন 15
b = a - b;  // b এখন 5
a = a - b;  // a এখন 10

console.log("a:", a);  // আউটপুট: a: 10
console.log("b:", b);  // আউটপুট: b: 5
3. Destructuring Assignment দিয়ে Swap
এখানে JavaScript এর ডেস্ট্রাকচারিং অ্যাসাইনমেন্ট ব্যবহার করে দুইটি ভ্যারিয়েবলের মান একসাথে swap করা হবে।

javascript
Copy code
let a = 5;
let b = 10;

// Destructuring assignment দিয়ে swap
[a, b] = [b, a];

console.log("a:", a);  // আউটপুট: a: 10
console.log("b:", b);  // আউটপুট: b: 5
সারাংশ:
স্বাভাবিক Swap (With Temp): তৃতীয় ভ্যারিয়েবল temp ব্যবহার করে মান পরিবর্তন করা।
Temp ছাড়া Swap (Without Temp): গাণিতিক অপারেশন ব্যবহার করে ভ্যারিয়েবলের মান পরিবর্তন করা।
Destructuring Swap: JavaScript এর ডেস্ট্রাকচারিং অ্যাসাইনমেন্ট ব্যবহার করে সরাসরি মান পরিবর্তন করা।
এই তিনটি পদ্ধতি থেকে কোন একটি বেছে নিয়ে আপনি সহজে ভ্যারিয়েবলের মান swap করতে পারবেন।