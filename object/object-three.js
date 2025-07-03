const computer={
    brand:'Hp',
    processor:'Intel',
    ssd:500,
    price:50000
}
// const keys= Object.keys(computer);
// console.log(keys);

const values = Object.values(computer);
console.log(values);




const profile = {
    name:"Rohim",
    age:25,
    city:"Dhaka"
}
const profileKeys= Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);
console.log(profileKeys);