// const str = "hello";
// let reverseString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverseString += str[i];
// }
// console.log(reverseString);

// const Numbers = [2, 8, 4, 10, 1];
// let currMax = -1;
// for (const num of Numbers) {
//   currMax = Math.max(currMax, num);
// }
// console.log(currMax);

// const target = 7;
// let isPrime = "True";
// for (let i = 2; i < target / 2; i++) {
//   if (target % 2 == 0) isPrime = "False";
// }
// console.log(isPrime);

// function fact(val) {
//   if (val < 2) return val;
//   return val * fact(val - 1);
// }
// console.log(fact(5));

// const target = 10;
// const values = [3, 4, 5, 6, 2];

// function sumTarget(target, values) {
//   for (let i = 0; i < values.length; i++) {
//     for (let j = i + 1; j < values.length; j++) {
//       if (values[j] + values[i] == target) {
//         console.log(i,",", j);
//         return;
//       }
//     }
//   }
//   console.log(-1, ",", -1);
// }

// sumTarget(target, values);

// const numbers = [5, 4, 5, 8, 1, 4, 1];
// const after_removing_duplicates = [];
// const hash_table = new Array(100).fill(0);

// for (const num of numbers) {
//   if (hash_table[num] == 0) {
//     after_removing_duplicates.push(num);
//     hash_table[num] = 1;
//   }
// }

// console.log(after_removing_duplicates);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }

//   getDetails() {
//     console.log("name :", this.name, "age :", this.age);
//   }
// }

// const dog1 = new Dog("tommy", "2");
// dog1.getDetails();

// function add(val) {
//   val += 1;
// }

// let val = 1;
// add(val);

// console.log(val);

// function addObj(obj) {
//   obj.val += 1;
// }

// const obj = { val: 1 };
// addObj(obj);
// console.log(obj);

async function getData() {
  try {
    const response = await fetch("prefered api url");

    if (response.status == 200) {
      console.log("success");
    } else {
      console.log("failed");
    }
  } catch (err) {
    console.log(err.message);
  }
}
