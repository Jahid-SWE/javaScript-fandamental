let numbers=[12,20,30,54,45];
numbers.push(22);
console.log(numbers);


// number add in number type data type using push
// let marks =[20,60,42,57,90,70];
// marks.push(40,68,90,95,99,97);
// console.log(marks);


// let friends= ['hassan', 'kamal','rakib', 'husin'];
// friends.push('kairul');
// console.log(friends);

// pop
// let friends = ['Mina','joty','lal', 'parul', 'koli', 'robin'];
// friends.pop();
// console.log(friends);

// let friend = ['Mina','joty','lal', 'parul', 'koli'];
// friend.pop();
// console.log(friend);


// let friends =['misbah', 'kakoli', 'hasib', 'rahi','badon'];
// let  pop1 = friends.pop();
// console.log(pop1);
// console.log(friends);


let friends= ['hasi', 'cuddus', 'hasnat', 'kumil', 'tuta'];
friends.shift();
console.log(friends);




// ১. সংখ্যার একটি অ্যারে আছে: [10, 20, 30, 40, 50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারেটি আউটপুট দেখা।
// ২. তুই কিছু নাম রেখেছিস অ্যারেতে: ['সাজিব', 'সাগর', 'সাকিব', 'সোহেল']। এখন তোর মনে হলো নতুন বন্ধু 'সুমন'কে এই অ্যারেতে যোগ করতে হবে। একটি প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর।
// ৩. তোর মোবাইলে যে যে গেম ইন্সটল করা আছে, সেগুলো একটি অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেওয়া আছে, সেটি রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলো আউটপুট হিসেবে দেখা।
// ৪. এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটি আউটপুট হিসেবে দেখা।
// ৫. তোর কাছে 5টি বইয়ের নাম দিয়ে একটি অ্যারে আছে। এখন তুই সবার প্রথম বইটি পড়ে শেষ করে ফেলেছিস। তাই প্রথম বইয়ের নামটি অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুট দেখা।



// ১. সংখ্যার একটি অ্যারে আছে: [10, 20, 30, 40, 50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারেটি আউটপুট দেখা।
let price=[10,20,30,40,50];
price.push(60);
console.log(price);


// ২. তুই কিছু নাম রেখেছিস অ্যারেতে: ['সাজিব', 'সাগর', 'সাকিব', 'সোহেল']। এখন তোর মনে হলো নতুন বন্ধু 'সুমন'কে এই অ্যারেতে যোগ করতে হবে। একটি প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর।
let friendList = ['sajib', 'sagor','sakib','sohel'];
friendList.push('sumon');
console.log(friendList);


// ৩. তোর মোবাইলে যে যে গেম ইন্সটল করা আছে, সেগুলো একটি অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেওয়া আছে, সেটি রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলো আউটপুট হিসেবে দেখা।
let games = ['pubg', 'callofduty', 'clashofclean', 'angrybird','worldludu'];
games.pop();
console.log(games);


// ৪. এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটি আউটপুট হিসেবে দেখা।
let marks = [24,36,48,60];
marks.unshift(12);
console.log(marks);


// ৫. তোর কাছে 5টি বইয়ের নাম দিয়ে একটি অ্যারে আছে। এখন তুই সবার প্রথম বইটি পড়ে শেষ করে ফেলেছিস। তাই প্রথম বইয়ের নামটি অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুট দেখা।

let books= ['math', 'english', 'biographo', 'physics', 'highermath'];
books.shift();
console.log(books);