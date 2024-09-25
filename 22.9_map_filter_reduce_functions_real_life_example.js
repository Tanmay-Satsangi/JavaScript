const users = [
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Donald", lastName: "Trump", age: 75},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Deepika", lastName: "Padukone", age: 26}
]

// List of Full Name (firstName + lastName)
const fullName = users.map(x => x.firstName + " " + x.lastName)
console.log(fullName);

//count the number of people of same age
const peopleSameAge = users.reduce(function(acc, curr){
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1
    }
    return acc;
}, {});

console.log(peopleSameAge);

//Print the first name of all the people whose age is less than 30
const lessThanThirty = users.filter(x => x.age < 30).map(x => x.firstName);
console.log(lessThanThirty);
