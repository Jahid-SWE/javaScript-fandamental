let friends = ['hassan', 'kabbo','tuton','lutfar','nagar','polash'];
console.log(friends.includes('tuton'));
console.log(friends.includes('jahid'));


friends  = ['Towhid', 'kabbo','tuton','lutfar','nagar','polash'];
if(friends.includes('towhid')){
    console.log("Let's go to National Zoo");
}
else{
    console.log('Staty in home');
}
// indexOf use for index positon.
friends  = ['Towhid', 'kabbo','tuton','lutfar','nagar','polash'];
console.log(friends.indexOf('tuton'));


// -1  index  tokoni dekhai jokhon 
friends  = ['Towhid', 'kabbo','tuton','lutfar','nagar','polash'];
console.log(friends.indexOf('tuuton'));





// 1.  `includes` আর `indexOf` এর মধ্যে পার্থক্য কি?
// 2.  তুই একটা প্রোগ্রাম বানাতে চাস, ঘোটাতে 'আম' নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে 'আম আছে', আর না থাকলে বলবে, 'আম নেই, গাছে উঠে'। ফলের অ্যারেতে 'আপেল', 'কমলা', 'আম' ও 'লিচু' আছে।
// 3.  তুই একটা অ্যারে বানালে, যেখানে নামগুলো আছে— 'বাবুন', 'আলিকা', 'ছোটিস'। এখন প্রোগ্রাম লিখে দেখ, বাবুন-এর ইনডেক্স নাম্বার কত।
// 4.  ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে— 'রিমন', 'রিফাত', 'রাজীব'। এখন তোর মনে হলো, 'রিফাত'-এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর।
// 5.  তুই কিছু শহরের নাম লিখে রাখছিস— 'Dhaka', 'Chittagong', 'Sylhet'। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে দেখ কর, RajShahi আছে কি না?
// 6.  একটা প্রোগ্রাম বানিয়ে 'বৃষ্টি' নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি 'I need umbrella', না থাকলে বলবি 'No rain no pain'। অ্যারেতে 'দীঘি', 'মেঘ', 'বৃষ্টি' ও 'বন্যা' আছে।
// 7.  তোর প্রিয় খেলাগুলোর একটি অ্যারে আছে— 'ফুটবল', 'ক্রিকেট', 'ভলিবল'। এখন তুই চেক করতে চাস 'ব্যাডমিন্টন' নামক খেলাটি অ্যারেতে আছে কি না।


// 1 


// 2.  তুই একটা প্রোগ্রাম বানাতে চাস, ঘোটাতে 'আম' নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে 'আম আছে', আর না থাকলে বলবে, 'আম নেই, গাছে উঠে'। ফলের অ্যারেতে 'আপেল', 'কমলা', 'আম' ও 'লিচু' আছে।

let foods= ['mango', 'guava', 'papia','Orange', 'banana'];
if(foods.includes('mango')){
    console.log('Here has mango');
}
else{
    console.log('Here has no Mango');
}


// 3.  তুই একটা অ্যারে বানালে, যেখানে নামগুলো আছে— 'বাবুন', 'আলিকা', 'ছোটিস'। এখন প্রোগ্রাম লিখে দেখ, বাবুন-এর ইনডেক্স নাম্বার কত।

let friendList = [ 'babudl','alif','babul','babul', 'coton'];
let index = friendList.indexOf('babul');
console.log(index);


// 4.  ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে— 'রিমন', 'রিফাত', 'রাজীব'। এখন তোর মনে হলো, 'রিফাত'-এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর।

let listFriend = ['rimon', 'rifat', 'rajib'];
console.log(listFriend.indexOf('rifat'));


// 5.  তুই কিছু শহরের নাম লিখে রাখছিস— 'Dhaka', 'Chittagong', 'Sylhet'। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে দেখ কর, RajShahi আছে কি না?
let citys= ['Dhaka', 'Chittagong','Sylhet'];
citys.push('rajshahi');
console.log(citys);
if (citys.includes('Rajshahi')){
    console.log('Here present Rajshahi City');
}
else{
    console.log('Here abcense Rajshahi city');
}



// 6.  একটা প্রোগ্রাম বানিয়ে 'বৃষ্টি' নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি 'I need umbrella', না থাকলে বলবি 'No rain no pain'। অ্যারেতে 'দীঘি', 'মেঘ', 'বৃষ্টি' ও 'বন্যা' আছে।

let listArray = ['dighi', 'megh', 'bristy1', 'bonna'];
if(listArray.includes('bristy')){
    console.log(' I need Umbrella');
}
else{
    console.log('No rain on pain.');
}
 


// 7.  তোর প্রিয় খেলাগুলোর একটি অ্যারে আছে— 'ফুটবল', 'ক্রিকেট', 'ভলিবল'। এখন তুই চেক করতে চাস 'ব্যাডমিন্টন' নামক খেলাটি অ্যারেতে আছে কি না।

let game= ['football', 'cricket','voliball', ];
console.log(game.includes('badmintan'));
if(game.includes('badmintan')){
    console.log('It is in still Here');
}
else{
    console.log('Here has no game like badminton');
}