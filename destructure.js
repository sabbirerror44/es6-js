const person =  { name: 'Jack william', age: 17, job: "facebook", gfName: 'Ema Watson', address: 'Kochu Khet', phone: '0171422222', friends: ['Tom', 'Jerry', 'Bean']};

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Khan'
    }
}
const {leader} = complexObject.info;
console.log(leader); 
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);
// const gfName = person.gfName;
// const phone = person.phone;
const { phone, gfName, address, salary, age } = person;

console.log(gfName, phone, address);
console.log(gfName, phone, salary, age);
// console.log(gfName, phone);
const friends = ['sakib khan', 'Aram Khan', 'Salman khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend, nextFriend, restFriends);