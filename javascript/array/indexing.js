let numbers = [3,66,25,15,12];

//  3 position array konti 2,5,4
let number =[5,6,8,7,8,7,45,78];
// console.log(number[3]);

// nidristo variable e man rakte pari
let listNumber =[80,9,70,75,18,70,75,44,80];
let newNumber = listNumber[5];
console.log(newNumber);

//  Jody array list 10 ache kintu a mi caiteci 12 ba 14 dakte tahole ki pabo? pabonah karon aikhane 10 ta index valu ace akon  12/14 index nai tai ata takle undefine dekhabe
let numberList =[21,5,46,84,78,45,6,57,87,78,8]
let numberNew =numberList[12];
console.log(numberNew);

// index value ke update kivabe korbi
let marks = [41,87,95,87,48,67,59];
marks[3]=100;
console.log(marks);


// 1.  তুই তোর সব বন্ধুদের নাম একটি অ্যারেতে রাখলি। এখন তুই বের কর, 3 নম্বর ইনডেক্সে কে আছে।
// 2.  তোর 7টা প্রিয় বইয়ের নাম একটি অ্যারেতে রাখ। তারপর দেখ, 5 নম্বর পজিশনের বইয়ের নাম কী।
// 3.  তুই একটি অ্যারে বানা, যেখানে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো রাখলি। এখন 7 নম্বর পজিশনের মানকে 30 দিয়ে আপডেট কর।
// 4.  তোর মোবাইলে কিছু গেম আছে এবং তুই সেগুলোকে একটি অ্যারেতে রাখলি—‘ফ্রি ফায়ার’, ‘পাবজি’, ‘ক্যালাফ ডিউটি’, ‘টেম্পল রান’। এখন তুই চাস, 2 নম্বর ইনডেক্সের গেমটি পরিবর্তন করে সেখানে ‘সাবওয়ে সার্ফার’ রাখবি। একটি প্রোগ্রাম লিখে সেটাকে সেটই কর।
// 5.  তোর পরিবারের সদস্যদের নাম একটি অ্যারেতে রাখ। তারপর থার্ড পজিশনের সদস্যের নাম আউটপুট হিসেবে দেখা।
// 6.  তুই প্ল্যান করলি 7টা দেশ ঘুরবি। দেশগুলোর নাম একটি অ্যারেতে রাখ। তারপর 4 নম্বর পজিশনের দেশের নাম বের কর।
// 7.  তোর পড়ার টেবিলে 4টি জিনিস আছে। সেগুলোর নাম একটি অ্যারেতে রাখ। তারপর 7 নম্বর পজিশনের জিনিসটা কী, সেটি বের কর।


// 1.  তুই তোর সব বন্ধুদের নাম একটি অ্যারেতে রাখলি। এখন তুই বের কর, 3 নম্বর ইনডেক্সে কে আছে।

let friends = ['Hasan','polash', 'kamal','Towhid','faysal'];
console.log(friends[3]);


// 2.  তোর 7টা প্রিয় বইয়ের নাম একটি অ্যারেতে রাখ। তারপর দেখ, 5 নম্বর পজিশনের বইয়ের নাম কী।
let books=['Maro thaba','quran', 'bukhari', 'tirmiji', 'abudaud', 'sunay', 'nasaye'];
console.log(books[4]);


// 3.  তুই একটি অ্যারে বানা, যেখানে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো রাখলি। এখন 7 নম্বর পজিশনের মানকে 30 দিয়ে আপডেট কর।
let arrayNumber =[1,2,3,4,5,6,7,8,9,10];
    arrayNumber[6]= 30;
console.log(arrayNumber);



// 4.  তোর মোবাইলে কিছু গেম আছে এবং তুই সেগুলোকে একটি অ্যারেতে রাখলি—‘ফ্রি ফায়ার’, ‘পাবজি’, ‘ক্যালাফ ডিউটি’, ‘টেম্পল রান’। এখন তুই চাস, 2 নম্বর ইনডেক্সের গেমটি পরিবর্তন করে সেখানে ‘সাবওয়ে সার্ফার’ রাখবি। একটি প্রোগ্রাম লিখে সেটাকে সেটই কর।

let games= ['free fire', 'pubg', 'callofduty','ranespace'];
games[2]='subwaysuffer';
console.log(games);


// 5.  তোর পরিবারের সদস্যদের নাম একটি অ্যারেতে রাখ। তারপর থার্ড পজিশনের সদস্যের নাম আউটপুট হিসেবে দেখা।
let familyMember= ['jaman','kamal','Hasan', 'titon', 'kalia'];
console.log(familyMember[2]);


// 6.  তুই প্ল্যান করলি 7টা দেশ ঘুরবি। দেশগুলোর নাম একটি অ্যারেতে রাখ। তারপর 4 নম্বর পজিশনের দেশের নাম বের কর।
let cuntries = ['bangladesh','pakistan', 'maldivs','nepal','canada', 'Australia', 'equada'];
console.log(cuntries[3]);

// 7.  তোর পড়ার টেবিলে 4টি জিনিস আছে। সেগুলোর নাম একটি অ্যারেতে রাখ। তারপর 7 নম্বর পজিশনের জিনিসটা কী, সেটি বের কর।


let name=[ 'pen', 'paper', 'mouce','keyboard'];
console.log(name[12]);



let str= 'Hassan';
console.log(str.length);