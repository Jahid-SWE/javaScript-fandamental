// const player={
//     name:'Sakib',
//     age:32,
//     'sports category':['Cricket','footbal','jump'],
//     team:'Bangladesh'
// }
// console.log(player['sports category']);

// // object ar property access or keys access 
// const computer={
//     brand: 'Hp',
//     processor:'i3',
//     ram:520,
//     price:50000,
//     curret:'version'
// }
// // object ar property access or keys access 
// const property=Object.keys(computer);
// console.log(property);
// // object ar property access or value access 
// const values = Object.values(computer);
// console.log(values);


// object ar modhe ki property ace ki nah ta check korar jonno prothome akta array te property ke rakte hobe then ar modhe include die check korle bujha jabe ace ki nah jody take tahole man o paiye jabo

// const profile = {
//     name : 'jahid',
//     age:28,
//     study:'Msc',
//     group:'Science'
// }
// const profileKey= Object.keys(profile);
// const isName= profileKey.includes('name')
// console.log(isName);


// objet er modhe property ace ki  nah ar akvabe check kora jai if  condition diye

// const person={
//     name:'johrul Islam',
//     passport: true,
//     visa: 'Yes',
//     ticket: 'No',
//     'flight date': '25-20-2025'

// }

// if(passport in person){
//     console.log('Here is name present');
// }
// else{
//     console.log('Here not Present person');
// }



// if else diye object er property is availabel  or not 
// const profile = {
// name: "Rahim",
// age: 28,
// city: "Dhaka",
// };
// if ( "name" in profile) {
// console.log("Name exists");
// } else {
// console.log("No Name. No Spam.");
// }


// object er nijosho property diye chek kora property ace ki  nah
// const customer ={
//     name:"salam",
//     address:"dhaka",
//     'shop No':20,
//     'product name': 'glosari'

// }
// if(customer.hasOwnProperty('product name')){
//     console.log('Here has product for customer');
// }
// else{
//     console.log('no Product');
// }


// abar property er sathe value check kora lagte pare tokon ja korb o
// const  propertyValue={
//     name:'Hassan',
//     address: 'Natore',
//     city: 'Natore sSadar',
//     distance:30
// }
// if(propertyValue.city==='Natore Sadar'){
//     console.log(propertyValue.city);

// }
// else{
//     console.log('Currently not available Here');
// }


// object ar property and values er man aksathe paite hoile .entries syntax use korte hoi
// const person={
//     name:'Jahid',
//     age:28,
//     country:'Bangladesh'
// }
// const keysValu= Object.entries(person);
// console.log(keysValu);


// object ker jonno for--in babohar kore are array er jonno for--of babohar kore
// const person ={
//     name:'Kamal',
//     country:'Nepal',
//     city:'teleruwa'
// }
// for(ke in person){
//     const value= person[ke];
//     console.log(ke, value);
// }



//
const person={name:'Jaman',status:'pass',university:'dhaka', meritList:15}
const keys=Object.keys(person);
for (const key of keys){
    console.log(key,person[key])
}

