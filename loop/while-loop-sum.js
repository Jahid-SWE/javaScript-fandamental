// let num= 1;
// let sum= 0;
// while(num<=10){
//     console.log(num);
//     sum = sum+num;
//     num++;
// }
// console.log(sum);



// 1.  while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।
// 2.  while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।
// 3.  তুই এক স্কুল 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
// 4.  while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।
// 5.  20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখাবি।



// 1.  while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।
// let number= 50;
// while(number<=100){
//     console.log(number);
//     number++;
// }


// 2.  while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।
// let numbers= 5;
// let sumResult = 0;
// while(numbers<=15){
//     sumResult=sumResult+numbers;
//     numbers++;
// }
// console.log(sumResult);



// 3.  তুই এক স্কুল 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
// let studentList = 1;
// let summation= 0;
// while(studentList<=50){
//     console.log(studentList);
//     summation= summation+studentList;
//     studentList++;
// }
// console.log(summation);


// 4.  while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।

let totalSum = 0;
let num = 21;
while (num <= 50) {
    totalSum += num;
    console.log(`Number ${num}, current Result of sum: ${totalSum}`);
    num++;
}



// let start = 21;
// let Result =0;
// while( start<=50){
//     Result = Result+start;
//     console.log(Result);
//     console.log(start);
//     start++;
// }




// 5.  20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখাবি।

// let numberStart = 20;
// let addition = 0;
// while(numberStart<=40){
//     addition=addition+numberStart;
//     numberStart++;
// }
// console.log(addition);