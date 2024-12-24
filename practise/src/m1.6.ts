{
    // normal function

    function addNum (num1 : number, num2 : number = 10) : number{    //default value number = 10
        return num1+ num2;
    }
    addNum(3, 5);


    // arrow number

    const sumNumbers = (num1: number, num2 : number) : number => num1 + num2
    
    sumNumbers(4,6);

    // object--> function--> method

    const user2 = {
name : "fam",
balance : 0,
addBalance (balance:number) : string{
    return `my new balance is : ${this.balance + balance}`;
},
}

const arr : number[] = [2,54,6,7];

const newArr : number[] = arr.map((e : number) : number => e*e);

}