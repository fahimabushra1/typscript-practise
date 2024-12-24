"use strict";
{
    // normal function
    function addNum(num1, num2 = 10) {
        return num1 + num2;
    }
    addNum(3, 5);
    // arrow number
    const sumNumbers = (num1, num2) => num1 + num2;
    sumNumbers(4, 6);
    // object--> function--> method
    const user2 = {
        name: "fam",
        balance: 0,
        addBalance(balance) {
            return `my new balance is : ${this.balance + balance}`;
        },
    };
    const arr = [2, 54, 6, 7];
    const newArr = arr.map((e) => e * e);
}
