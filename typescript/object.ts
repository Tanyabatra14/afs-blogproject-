interface User{
    username :string,
    age :number
}
let user:User={
     username :"tanya",
     age :20
}
console.log(user.username)
let num:number[] = [1,2]
num[3] = 45;
let word :string[] = ["tanya"]
let numstr:number[] | string[] = [];
numstr[0] = 1;
numstr[1] = "10"
//console.log(numstr[4]);
interface Emp{
    id:number,
    ename:string,
    salary:number,
    dep:string,
    getName():string,
    getsalary():number,
}

let emp:Emp = {
    id:1,
    ename:"teena",
    salary:20000,
    dep:"it",
    getName:function(){
        return this.ename
    },
    getsalary:function(){
        return this.salary
    },
  
}
let emp3:Emp = {
    id:1,
    ename:"sneha",
    salary:20000,
    dep:"it",
    getName:function(){
        return this.ename
    },
    getsalary:function(){
        return this.salary
    },
  
}


console.log(emp.getName());
console.log(emp.getsalary());



//array of object
let employe:Emp[]=[emp,emp3]
console.log(employe[0])


//array of object for a user

interface userdata{
    id:number,
    password:string,
    email:string,
}
let user1:userdata[]=[{
    id:1,
    password:"helo",
    email:"tbatr3090@gmail.com"


}]
//or
let some :number |string;
let arr2: number[]| string[]=[]
let arr3:(number|string)[] = [1,"343"];

