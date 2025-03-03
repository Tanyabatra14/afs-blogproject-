"use strict";
let user = {
    username: "tanya",
    age: 20
};
console.log(user.username);
let num = [1, 2];
num[3] = 45;
let word = ["tanya"];
let numstr = [];
numstr[0] = 1;
numstr[1] = "10";
let emp = {
    id: 1,
    ename: "teena",
    salary: 20000,
    dep: "it",
    getName: function () {
        return this.ename;
    },
    getsalary: function () {
        return this.salary;
    },
};
let emp3 = {
    id: 1,
    ename: "sneha",
    salary: 20000,
    dep: "it",
    getName: function () {
        return this.ename;
    },
    getsalary: function () {
        return this.salary;
    },
};
console.log(emp.getName());
console.log(emp.getsalary());
//array of object
let employe = [emp, emp3];
console.log(employe[0]);
