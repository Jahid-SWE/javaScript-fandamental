for(let num=0; num<5; num++){
    console.log(num);
}

for(let number =1; number<10; number++){
    console.log(number);
}


for(let number = 50; number<=100;number++){
    console.log(number);
}


let sum=0;
for(let number = 11; number<=15; number++){
    sum+=number;
}
console.log(sum);



// 1.  For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর।
// 2.  দুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটি for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
// 3.  For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।



// 1.  For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর।

for(let number = 150; number<=170; number++){
    console.log(number);
}



// 2.  দুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটি for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let sum= 0;
for(let number = 31; number<=33;number++){
    sum+=number;
}
console.log(`The summation of 31 to 58 is : ${sum}`);



// 3.  For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।

let sum = 0;
for(let number= 25; number<=75; number++ ){
    sum+=number;
}
console.log(`Total summation of : ${sum}`);