
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

const persons={
    name:'Md. Jahid Hassan',
    age:50,
    profession:'web Developer',
    salary:80000,
    married:false,
    'fav place':['Mini river', 'Sitacundo', 'Hatirghil']
}
const propertyName = 'profession';
console.log(persons['married']);
console.log(persons['fav place']);
console.log(persons[propertyName]);



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

const college ={
    name: 'vnc',
    class:['11','12'],
    events:['science fair', 'bijoy dibosh', '21 feb'],
    unique:{
        color:'blue',
            result:{
                gpa:5,
                merit:'top'
            }
    }
}

console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.events[2]);