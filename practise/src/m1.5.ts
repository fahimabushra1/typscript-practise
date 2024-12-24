{
    // reference type-> object

const user : {
    firstName : string;
    middleName? : string; // optional type
    lastName : string;
    company : "phero"; // literal type
    readonly country : string;
    isMarried : boolean;
} = {
    firstName : "fahima",
    middleName : "samsunnahar",
    lastName : "bushra",
    company : "phero", // literal type
    country : "bd",
    isMarried : true
};

user.company = "phero";

}