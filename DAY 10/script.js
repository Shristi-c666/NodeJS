console.log("Bye world")

var bottle = 'pani'
console.log(bottle)
var age = 22
var isNepali = true

console.log(age)

var name = "Shristi";
var output = "My name is " + name;  //Using String Concatenation
console.log(output);

var name1 = "Diya"
var name2 = "Pema"
var name3 = "Seema"
var name4 = "Sreya"
var name5 = "Monika"

var name = [name1 , name2 , name3 , name4 , name5]
console.log(name)
console.log(name.length)
console.log(name[1])

var data1 = [
    {
        name: "Shristi",
        age: 22
    },
    {
        name: "Seema",
        age: 15
    } 
];

// Access and print "Shristi" and "15"
console.log(data1[0].name); // "Shristi"
console.log(data1[1].age);  // 15

var data2 = [
    {
        name: "Sreya",
        age: 22
    },
    {
        name: ["Pema","Seema","Diya"],
        age: 15
    } 
];

console.log(data2[1].name[2])

var data3 = [
    {
        name: "Dhiraj",
        age: 22
    },
    {
        name: ["Himan","Chandru","Heema"],
        age: 15
    }
]

console.log(data3[1].name[2])





