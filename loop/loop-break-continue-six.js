
// Break 'condition sotto hoile break dile theme jabe'
for(let number = 1; number<15; number++){
    if(number==7){
        break;
    }
   console.log(number);
}


// continue ' jokon kono nirdistow kisu skip kore baki kaj gulo korbe tokon amra condition er pore continue likhe dile kaj hoie jab'
for (numbers=1; numbers<=10; numbers++){
    if(numbers==8){
        continue;
    }
    console.log(numbers);
}



// 1. ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।
// 2. তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।
// 3. তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকি সব সংখ্যা প্রিন্ট হবে।
// 4. 1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদদে। 12 স্কিপ হয়ে যাবে এবং বাকি সব সংখ্যা প্রিন্ট হবে।
// 5. 1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যা বাদ যাবে।
// 6. 91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ করা হবে, থেমে যাবে। 




// 1. ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে। 

for(numbering=1; numbering<=30; numbering++){

    console.log(numbering);
    if(numbering>15){
        break;
    }

}


// 2. তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।


for(startNumber=1; startNumber<=40; startNumber++){

    if(startNumber%7==0){
        continue;
    }

    console.log(startNumber);
}


// 3. তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকি সব সংখ্যা প্রিন্ট হবে।

for(countNumber = 1;countNumber<=15; countNumber++){
if(countNumber==9){
    continue;
    }
    console.log(countNumber);
}


// 4. 1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদদে। 12 স্কিপ হয়ে যাবে এবং বাকি সব সংখ্যা প্রিন্ট হবে।
for(serial=1; serial<=20; serial++){
    if(serial===12){
        continue;
    }
    console.log(serial);
}


// 5. 1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যা বাদ যাবে।
for(numberStart=1; numberStart<=25; numberStart++){
    if(numberStart%3==0){
        continue;
    }
    console.log(numberStart);
}




// 6. 91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ করা হবে, থেমে যাবে। 
for(start=91; start<=120; start++){
    if(start%10==0){
        break;
    }
    console.log(start);
}