// find Out even Number 

for(let i =0; i<20; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// fond out Odd Number
for ( i=1; i<20; i++){
    if(i%2 ==1){
        console.log(i)
    }
}



for (let i=0; i <= 20; i=i+2){
    console.log(i)
}


// 5 dara bivajoo
let sum= 0;
for(let number = 1; number <=30; number=number+5 ){
    // sum=sum+number;
    console.log(number);
}
console.log(sum);


// 3 dara bivajjo
for (let num=1; num<=30; num++){
    if(num%3==0){
        console.log(num);
    }
}


// 3 othoba 5 dara bivajjo
for(let numbers=1; numbers<=50; numbers++){
    if(numbers%3==0 || numbers%5 == 0){
        console.log(numbers);
    }
}



// 3 abong 5 dara bivajjo amon sonkha gulo likho

for(let numb =1; numb<=70; numb++){
    if(numb%3==0 && numb%5==0){
        console.log(numb);
    }
}


// 1.  তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
// 2.  এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
// 3.  এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর।
// 4.  For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি।
// 5.  0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 4 এবং 6 দিয়ে বিভাজ্য।
// 6.  1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।




// 1.  তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
for(let number = 20 ; number<=50; number++){
    if(number%7== 0){
        console.log(number)
    }
}


// 2.  এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
for(number = 40; number<=80; number++){
    if(number%5==0 && number%7==0){
        console.log(number);
    }
}


// 3.  এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর।
let sum=0
for(let number = 1; number<=40; number++){
    if(number%13==0){
        sum=sum+number;
    }
}
console.log(sum)


// 4.  For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি।  important for me

for(let number=1; number<=50; number+=4){
    console.log(number);

}



// 5.  0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 4 এবং 6 দিয়ে বিভাজ্য।
for(number = 0; number<=100; number++){
    if(number%4==0 && number%6==0){
        console.log(number);
    }
}



// 6.  1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।  complex mid level
let numbers=[];
let sum=0;
for(number=1; number<=50; number++ ){
    if(number%3==0 && number%4==0){
        numbers.push(number)
        sum=sum+number;
    }
    
}
console.log(sum);
console.log(numbers);