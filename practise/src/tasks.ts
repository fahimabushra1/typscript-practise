// task-01

const info:string = "hello world, I will complete this course successfully and become a next level web developer.";
console.log(info);

// task-02

   const userInfo = (name: string, age: number, role?: "admin" | "user" |"guest" ): string =>{
    return `${name} is ${age} years old and the role is ${role}`;
};
const result = userInfo("fam", 23, "admin");
console.log(result);


// task-03

type Person = {
    name : string;
    address : string;
    hairColor : string;
    eyeColor : string;
    income : string;
    expense : string;
    hobbies : string[];
    familyMembers : string;
    job : string;
    skills : string[];
    maritalStatus : string;
    friends : string; 
};

const aGirl : Person = {
    name : "fatima",
    address : "dhaka",
    hairColor : "black",
    eyeColor : "black",
    income : "100",
    expense : "5000",
    hobbies : ["painting", "watching youTube", "talking thyself", "doing taekwondo"],
    familyMembers : "4",
    job : "student",
    skills : ["painting", "coding"],
    maritalStatus : "unMarried",
    friends  : "10",
}
const aWoman : Person = {
    name : "bushra",
    address : "khulna",
    hairColor : "black",
    eyeColor : "black",
    income : "100",
    expense : "5000",
    hobbies : ["painting", "watching youTube", "talking thyself"],
    familyMembers : "4",
    job : "home maker",
    skills : ["painting", "coding"],
    maritalStatus : "married",
    friends  : "10",
}


// task-04

interface Book {
name : string;
type: string;
price : string;
quantity : string;
publisher : string;
paper : string;
}

interface Megazine {
    name : string;
    type: string;
    price : string;
    quantity : string;
    publisher : string;
    paper ?: string;
    publishingTime : string;

}

type OneThing = Book | Megazine;

type Both = Book & Megazine;

const customer1 : OneThing = {
    name : "romoni",
    type: "megazine",
price : "10",
quantity : "5",
publisher : "meyera",
paper : "white",
}
const customer2 : Both = {
    name : "coding",
    type: "book",
price : "100",
quantity : "2",
publisher : "pc",
paper : "white",
publishingTime : "2022",
}

console.log({customer1,customer2})


// task-05

type ReverseString = (input : string) => string;

const reverseString : ReverseString =(input) => {
    return input.split('').reverse().join('');
}
console.log(reverseString("hello"));


// task-06
type Numbers = number[];

const result1 : Numbers = [1,2,3,4,5];
const result2 :Numbers = [2,3,4,5,6,7];
const spreadNumbersArray = [...result1,...result2]
console.log(spreadNumbersArray);

// rest operator
type ShowNumbersArray = (...numbers : number[]) => void;

const showNumbersArray : ShowNumbersArray = (...digits) => {
 digits.forEach((digit : number) => console.log(digit))
}
showNumbersArray(1,2,3,4,5,6,7,8,9,10)

const numbersReducer = (...numbers: number[]) => {
    return numbers.reduce((total , number) => total+ number, 0);
}
const res1 = numbersReducer(1,2,3,56);
const res2 = numbersReducer(1,2,343,56);
console.log(res1,res2)

// task-07


// task-08
type User = {
    name: string;
    email : string;
}
type Admin = {
    adminLevel : string;
}
type AdminUser = User & Admin; 

const adminUser :AdminUser = {
    name: "fatima",
    email : "fatima@gmail.com",
    adminLevel: "admin",
}
 
type DescribeAdmin = (user: AdminUser) => void;
const describeAdmin : DescribeAdmin = (user) => {
    console.log(`hi I am your ${user.adminLevel} ${user.name} my email is ${user.email}`)
}
describeAdmin(adminUser);


// task-09

type Employee = {
    name : string;
    address : {
        country : string;
        city : {
            area : string;
            direction : string;
        }
    }   
}

const male1 : Employee = {
    name : "fahim",
    address : {
        country : "bd",
        city : {
            area : "banasree",
            direction : "south",
        }
    }
}

type EmployeeCity = (employee : Employee) => void;

const getEmployeeCity  : EmployeeCity = employee => {
    const city = employee?.address?.city?.area ? "live in dhaka city" :
    "live in out side dhaka city";
    console.log(city)
}
getEmployeeCity(male1);


// task-10

type Name = string |null | undefined;

const personName1 : Name = "fatima"; 
const personName2 : Name = null; 
const personName3 : Name = undefined; 

type DisplayName = (name : Name) => void;

const getDisplayName : DisplayName = name => {
    const findName = name ?? "Anonymous";
    console.log(findName)
}
getDisplayName(personName1);
getDisplayName(personName2);
getDisplayName(personName3);
// task-11
// task-12
// task-13
// task-14
// task-15
// task-16