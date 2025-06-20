
// dot notation kivabe declear korte hoi tar udhron
// const person={
//     name:'Jahid Hassan',
//     age:28,
//     profession:'Web Developer',
//     salary:5000,
//     marriedStatus:'single'
// }
// console.log(person.salary);



// braket notation kivabe use korte hoi tar example

// const persons={
//     name:'Md. Jahid Hassan',
//     age:50,
//     profession:'web Developer',
//     salary:80000,
//     married:false,
//     'fav place':['Mini river', 'Sitacundo', 'Hatirghil']
// }
// const propertyName = 'profession';
// console.log(persons['married']);
// console.log(persons['fav place']);
// console.log(persons[propertyName]);



// change valu of property of valus
console.log('\n');
const crickter={
    name: 'Musfiqur',
    position:4,
    runs:800,
    speciality:'batter'
}
console.log(crickter.position);
console.log(crickter['speciality']);

crickter.position= 1;
crickter['speciality']='bowler';

console.log(crickter.position);
console.log(crickter['speciality']);



// object er vetor object kivabe declear korbo

// const college ={
//     name: 'vnc',
//     class:['11','12'],
//     events:['science fair', 'bijoy dibosh', '21 feb'],
//     unique:{
//         color:'blue',
//             result:{
//                 gpa:5,
//                 merit:'top'
//             }
//     }
// }

// console.log(college.unique.color);
// console.log(college.unique.result.gpa);
// console.log(college.events[2]);





// ১. তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে টিমের নাম console কর।
// ২. একটি laptop অবজেক্ট তৈরি করি। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।
// ৩. তোর একটি প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছেন। যেমন, name: "Cox's Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রপার্টি console log কর।
// ৪. তুই একটি phone অবজেক্ট বানাস। সেখানে brand, color, price প্রপার্টি থাকবে। ব্রান্ড দিয়ে Nokia, কালার black আর নাম 5000। ব্রাকেট নোটেশন দিয়ে নাম বের কর।
// ৫. একটি library অবজেক্ট তৈরি করি। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রপার্টি থাকবে। dot notation দিয়ে location বের কর।
// ৬. একটি movie অবজেক্ট বানা। যার title Inception, director Nolan, rating 9। bracket notation দিয়ে rating প্রপার্টি বের কর।
// ৭. একটি college অবজেক্ট বানা। যার নাম ndc, স্থাপিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এইবার তোর কাজ হবে সেকেন্ড groups-এর মান অর্থাৎ 1 ইনডেক্সের মান বের কর।
// ৮. একটি family অবজেক্ট বানা। যার মধ্যে প্রপার্টি থাকবে father সেটার মানও আরেকটি অবজেক্ট এবং ফাদারের মধ্যে আবার নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটি প্রপার্টি থাকবে, সেই প্রপার্টিও মানও আরেকটি অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আপুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।




// ১. তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে টিমের নাম console কর।

const player ={
    name:'Musfic',
    age:34,
    sports:'cricket',
    team:'Bangladesh'
}
console.log(player.team);



// ২. একটি laptop অবজেক্ট তৈরি করি। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।

const laptop={
    brand:'HP',
    price:80000,
    hardDisk:520,
    ram:64,
    screenSize:'19 inc'
}

console.log(laptop.screenSize);



// ৩. তোর একটি প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছেন। যেমন, name: "Cox's Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রপার্টি console log কর।

console.log('\n');const favPlace={
    name:"Cox's Bazar",
    distance:"400km",
    popularity:"high"
}
console.log(favPlace['popularity']);


// ৪. তুই একটি phone অবজেক্ট বানাস। সেখানে brand, color, price প্রপার্টি থাকবে। ব্রান্ড দিয়ে Nokia, কালার black আর নাম 5000। ব্রাকেট নোটেশন দিয়ে নাম বের কর।

const phone={
    brand:'Nokia',
    color:'black',
    price:500
}
console.log(phone['price']);



// ৫. একটি library অবজেক্ট তৈরি করি। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রপার্টি থাকবে। dot notation দিয়ে location বের কর।

const library={
    name:'public Library',
    location:'Dhaka',
    books:5000
}
console.log(library.location);




// ৬. একটি movie অবজেক্ট বানা। যার title Inception, director Nolan, rating 9। bracket notation দিয়ে rating প্রপার্টি বের কর।
const movie={
    title:'Inception',
    director:'Nolan',
    rating:9
}
console.log(movie['rating']);



// ৭. একটি college অবজেক্ট বানা। যার নাম ndc, স্থাপিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এইবার তোর কাজ হবে সেকেন্ড groups-এর মান অর্থাৎ 1 ইনডেক্সের মান বের কর।

const college={
    name:'ndc',
    established:1949,
    group:['Science','Arts','Commerce']

}
console.log(college.group[1]);



// ৮. একটি family অবজেক্ট বানা। যার মধ্যে প্রপার্টি থাকবে father সেটার মানও আরেকটি অবজেক্ট এবং ফাদারের মধ্যে আবার নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটি প্রপার্টি থাকবে, সেই প্রপার্টিও মানও আরেকটি অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আপুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।
console.log('\n');
const family={
    father:{
        name:'karim',
        age:75,
        profession:'farmer'
    },
    mother:{
        nmae:'Begom',
        age:65,
        profession:'house wife'

    }
}
const motheAge=family.mother.age;
const fatherAge=family.father.age;
const TogetherAge=motheAge+fatherAge;
console.log('Both age Summation Father Mother Age : ',TogetherAge);
