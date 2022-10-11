
let val;
let person={
    firstName:'Nisa',
    lastName:'yurdagul',
    age:21,
    hobbies:['music','csgo'],
    adres:{
        city:'Ankara',
        country:'Turkey'
    },
    getBirthYear:function(){
        return 2001-this.age;
    }

}
//val=person;
//val=person.age;
//val=person.hobbies[1];
//val=person.adres.city;
val=person.getBirthYear();
console.log(val);
console.log(person);
console.log(typeof person);

let people=[
    {
        firstname:'Ayse'
    },
    {
        lastname:'alkan'
    }
]
let x;
x=people;
console.log(x);