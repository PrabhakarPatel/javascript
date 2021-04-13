// console.log("hello world");


// section 3- value and variable in javascript

// var myname ="prabhakar patel";
// var myAge =22
// console.log(myname);
// console.log(myAge);

// var _myName = "prabhakar";
// var _1my__name ="patel"  
// var $myname = "code with prabhakar"
// var $my name = "code with prabhakar" //variable name does not use any space while taking the name
// var myname% ="yo" variable does not you special character also
// var 1myname = "coder";//variable does not from numeric
// console.log(_myName);
// console.log(_1my__name);
// console.log($myname);


// section 4- data type in javascript


// this three are string type 
// var myname ="prabhakar patel";
// var myname ="43";
// var myname ="yo45";


// number type 
// var myname = 45;

//boolean type
// var myname = true;
// console.log(myname);

// // typeof operator for whether our variable is string int boolean etc .
// console.log(typeof(myname));

// data type practice 

//console.log(10 +"20");// when we add number and string then it concatnate that mean 1020

//console.log(9-"5") //this is a bug in java script ans 4

//console.log("java "+"script") //both strin can concatinate each other java script

// console.log(" "+" ")it showns empty

// console.log(""+0)it show zero
//console.log("prabhakar "-"patel") //not a number it show as NaN
// console.log(true+true) in javascript true =1 then it shown as 2
// console.log(false+true)  in javascript true =1 and false=0 it both it show 2
// console.log(false+true) same like top 
// console.log(false-true) it show neagtive number because it shown as (0-1)

// intrview question
// diffrence null vs undifined 
//var yo5 = null; //as in  null value 
// console.log(yo5)
// console.log(typeof(yo5)) its show object in javascript when bug in javascript

//var standby; //but variable declared//not giving any role it show as undfined
//  console.log(standby)
//  console.log(typeof(standby)) typeof undefined 


// interview question 3

//NaN is a property of the global object.
//In another word , it is a variable in global sccope 
//The intial value of Nan is Not-a-number

//var myphoneNumber = 8877686887;
//var mYname = " code with prabhakar"
//console.log(isNaN(myphoneNumber))
//console.log(isNaN(mYname))

// if(isNaN(mYname)){
//     console.log("please enter your valid number")
// }

//NaN === NAN ;
//console.log(NaN === NaN); falsw
//Number.NAN === NaN
//console.log(Number.NAN === NaN); false
//isNaN(NaN);true
//console.log(isNaN(NaN));
//isNaN(Number.NaN) True
//console.log(isNaN(Number.NaN));
//Number.isNaN(NaN)true
//console.log(Number.isNaN(NaN));



//  expression and operator
//  expression is the combination of operator and operand 
//  where 5 is operand and +is a operator 

// section 5 - arithmetic operators in javascript

//console.log(5+20)



//operators

//1- Assignment operators
//2-Arithmetic operators
//3-Comparison operators
//4-Logical operators
//5-String operators
//5-conditional(ternary) operator



//1- Assignment operators
//An assigment operator assigns a avlue to its left operand
//based on the value of its right operand
//The simple assignment operator is equal(=)

//var x = 5;
//var y = 5;
//console.log("is both the X and y are equal or not" +x == y); false
//console.log(x==y) true

//I will tell you when we will see es6
//console.log(`is both the x and y are equal : ${x == y}`); is show true


//2-Arithmetic operators
//an arithemtic  operator takes num=merical values 
//either literals or variable as their operand
//return a single numerical value

//console.log(3+3);
//console.log(10-3);
//console.log(20/5);
//console.log(5*6);

//console.log("remainder operator " + 81%8)//module operator

//increment and decrement operator
//operator:X++ or++X or x-- or --x
//if used postfix ,with operator after operand (for example x++)
//the increment operator increments and return the value before incrementing


//increment
// var num =15;

// var newnum =num++;

// console.log(num);
// console.log(newnum);


//decrement
// var num =15;

// var newnum =num--;

// console.log(num);
// console.log(newnum);

//postfix increment operator means the expression is evaluated
//first using the orignal value of the variable and then the 
//variable is incremented 


//increment
// var num =15;

// var newnum = ++num;

// console.log(num);
// console.log(newnum);

// var num =15;


//decrement
// var newnum =--num;

// console.log(num);
// console.log(newnum);

//if used prefix ,with operator before operand (for example ++x)
// the increment operator increments and return the value after incrementing

//prefix increrment operator means the variable is incremented first and TouchEvent
//the expression is evaluated using the new value of variable



//3-Comparison operators
//a comparison operator compare its operands and
//return a logical value based on whether the comparison is true

//  var a =30;
//  var b =50;

//equal (==)
// console.log(a == b);

//not equal (!=)
//console.log(a != b);

//greater than (>)
//console.log(a>b);

//less than (<)
//console.log(a<b);

//greater than or equal too (>=)
//console.log(a>=b); 
//less than or equal too (<=)
//console.log(a<=b);



//section 4 logical operator 

//logical operators are typically used with boolean (logical ) values;
//when they are , they return Boolean value 

// var a = 30;
// var b = -20;

//logical AND(&&)
//the logical AND (&&) operator (logical conjuction )for a set of
//operand is true if and only if all of its  operand are true
//console.log(a > b&& b > 0)

//logical OR (||)
//logical  OR (||) operator (logical disjunction ) for a set of
// operand is true if and only is one or more of its operands is true
// console.log((a > b) || (b > a)) 

//logical not(!)
//logical  NOt (!) operator (logical copmlement,negation ) 
//takes truth to falsity and vice versa
//console.log(!((a>0) || (b<0)))
//console.log(!false)

//string concatenation (operators)
//the concatenation operator (+)conactitnate two string values togehter
//returning anotherstring that is the union of the two operand string 
//  console.log("hello world")
//  console.log("hello "+ "world")
// var my_name = "java"
// var my_Name = "script"
// console.log(my_name + "script")
// console.log(my_name + my_Name)


// challenge time 

// what will be the output 3**3?
// soln 
//console.log(3**5) //3*3*3*3*3 expoentaion operator base power exponet
// console.log(10**-1); 1/10

// what will be the output ,when we add Number and a string?
// console.log(5+"yo")

// write a program to swap two number ?
// var a =5
// var b=6
// // output  b=5 and a=6
// var c=b;//c=6
// var b=a; //b=5
// var a= c // a=6
// console.log("the value of a "+a)
// console.log("the value of b "+b)

// write a program to swap two numbers without using third variable?
// var a =5
// var b=6
// a = a+b // a=15
// b = a-b // b= 5
// a = a-b //a =10
// console.log("the value of a "+a)
// console.log("the value of b "+b)

//interview question 4
//what is the diffrence between ==vs===?

//sol
// var num1 =5
// var num2 ="5";
// console.log(typeof(num1))
// console.log(typeof(num2))
// console.log(num1==num2);double equal just check the value
// console.log(num1===num2);triple equal too also check data type also

// Control statment & loops
// if else
// the if statement excutes a statment if a specified condition is truthy
// if the condition is falsy , another statement can be executed


// if raining =raincoat 
// else no raincoat
// var tomr = "rain";
// if (tomr == "rain") {
//     console.log("take a raincoat") 
// }else{
// console.log("no need to take a raincoat")
// }

//challenge time to print leap year by code
// var year = 2400
// debugger;
// if (year%4===0){
//     if(year%100===0){
//         if (year%400===0){
//          console.log("leap year "+year)
//         }
//         else{
//             console.log("not a leap year "+year)
//         }}else{
//             console.log("year is a leap year "+year)
//         }
// }else{
//     console.log("not a leap year "+year)
// }

// what is truthy and falsy  value in javascript

// we have total 5 falsoy value in javascript
// 0,"",undefined,null,NaN,false** is false anyway
//all the value is true expect those

// if (score =null){
//     console.log("yay, we loss the game");
// }else{
//     console.log("yay, we won the game");
// }


// conditional (ternary)operator
// conditional (ternary)operator is only javascript operator
//if else is shorthand
// that take three operand

// variablename =(condition) ?value1:value2
// var age =18
// console.log((age>=18)?"you can vote":"you cant vote");


// switch statement 
// evaluates an expression matching the expresssion's value to a
// case clause,anmd executes statements associated with that case

// 1st without break statement 
// find the area of circle?
// var area ="circle";
// var PI =3.412;
// var l=5,b=4, r=3;
// if (area =="circle"){

//     console.log("the area of data "+PI*r**2)
// }else if (area=="rectangle"){

//     console.log("area of data"+(l*b)/2)
// }else{
//     console.log("please enter valid data")
// }


// var area ="circle";
// var area ="rectangle";
// var PI =3.412;
// var l=5,b=4, r=3;

// switch (area) {
//     case "circle":
//         console.log("the area of data "+PI*r**2);
//         break;
//     case "triangle":
//         console.log("area of data"+(l*b)/2);
//         break;
//     case "rectangle":
//         console.log("area of data"+(l*b));
//         break;
//     default:
//         console.log("not valid input")
//         break;
// }
// break
// terminate the current loop ,switch or label
// statement and transfers
// program control to the statment following the terminated statement
// if you want multiple output then dont use break 



// while loop
// the while statment creates a loops that executes a specified statment
// as long as the test condition evaluate to true 
// block scoop while loop

// var num =1
// while (num<=10) {
//     console.log(num) //infinte loop if we dont use num++
//     num++ ;
// }


// do while loop statment
// it exucute one time if it wrong also 
// var num =20
//  do {
//      console.log(num)
//      num ++;
//  } while (num <=10);


// for loop
// for(var num=1; num<=10;num++){
//     console.log(num)
// }

// challenge time 
// javascript program to print atable for given number(8)) 
// output 8*1=1

// for(var num =1;num<=10;num++){
//             var table =8
//     console.log(table +"*"+num+"="+table*num);
// }


// function in javascript
//  a javascript function is a block of code designed to perform a particualar task


// function defination
// a function we use a function ,we need to define it
// a function defination (also called a function declartion or function statment)
// consist of function keyword ,followed by:

// the name of the function 
// a list of the parameters to the function enclosed in parameters and seperated by comas.
// the javascript statements that define the function enclosed in clury brackets {...}


// calling function 
//defining a function does not excute it
// a javascript function is excuted whn "something "invokes it (call it)

// function sum() {
//     var a =10,b=20;
//     var total = a+b;
// console.log(total)
// }
// sum();

// function parameters vs function arguments
//function parameters are the names listed in the function's definiation
//function arguments are the real values passed to the function
// (a,b) is parameters
// function sum(a,b) { 
//     var total = a+b;
// console.log(total)
// }
// sum(20,40);the values is argument
// sum(20,50);
// sum(20,90);


// interveiw question
// why Function

// you can resuse code: define the code once,and use it many Time
// you can use the same code many times with diffrent argument
// to produce diffrent results

// // 0r
//  a function is agroup of reusable code which can be called anywhere
//  in your program this eliminates the need of writing the smae code
//  again and again
// dry do not repeat your self 


// function expression 
// function expression simply means 
// create a function and put it into the variable


// function sum(a,b) { 
//         var total = a+b;
//     console.log(total)
//     }
//    var funcexp = sum(20,40);

// return keyword
// when javascript reaches a return statment,
// the function will stop excuting
// function often compute a return value 
// the return value is "returned "back to the 'caller" 

// function sum(a,b) { 
//         var total = a+b;
//          return total;
//     }
//    var funcexp = sum(20,40);
//    console.log("the total number of a and b "+funcexp);

//anonymous function
//a function expression is similar to and has the same synatax
//function declaration one can define "named"
//function  expression (where the name of the expression might)
//be used in the call stack for example
//or anonymous function experssion

// var funexp = function sum(a,b) { 
//         var total = a+b;
//          return total;
//     }
//     // console.log("the total number "+funexp(12,34))
//     var sum = funexp(36,45);
//     var sum1 = funexp(36,49);
//     console.log(sum>sum1)
//    console.log("the total number of a and b "+sum);




// now its time for modern javascript
//  feature of ECMAScript 2015 also known as es6

//  let VS const  vS var

//  var myName ="prabhakar patel"
//  console.log(myName);
//  myName ="CodeWithPrabhakar.com"
//  console.log(myName);


//  let myName ="prabhakar patel"
//  console.log(myName);

//  myName ="CodeWithPrabhakar.com"
//  console.log(myName);


//  const myName ="prabhakar patel"
//  console.log(myName);

//  myName ="CodeWithPrabhakar.com"
//  console.log(myName);



//  function bio() { 
//      let myfirstName ="prabhakar"
//     //  console.log(myName);

//      if(true){
//          let mylastname = "patel"

//          console.log("inner "+myfirstName) //parent can use child
//          console.log("outer "+mylastname) 
//         }
//         console.log("outer "+mylastname)
// }
// bio()



//  function bio() { 
//      Const myfirstName ="prabhakar"
//          console.log("inner "+myfirstName) //
//      if(true){
//          const mylastname = "patel"
//          console.log("outer "+mylastname) 

//         }
//         console.log("outer "+mylastname)
// }
// bio()

//  var ==> function scope
// let and const ==> blocK scope 





// 2 template literal (template strings)

//javscript program to print table for a given number(8);


// output :8*1=8
//        8*2=16
//        8*3=24

// for (let num =1 ;num<=10;num++){
//     let tableof =12;
//     // console.log(tableof+"*"+num+"="+num*tableof)
// console.log(`${tableof} * ${num} = ${tableof*num}`) new type to right
// }




// 3 default parameters 
//default function parameters allow named parameters to be
//intialized with default value if no or undfined is passed

// function mult(a,b=1) {
//     return a*b
// }
// console.log(mult(8))

//destructuring in Es6
 
//the destructuring assignment syntax is javascript Expression
//that makes it possible to unpack value  from arrays,
// or properties from object , into distinct variable 


// ==Array destructuring==//

// const mybiodata =["prabhakar","patel",22,]

// let myfirstName = mybiodata[0] 
// let myLastName = mybiodata[0] 
// let myAge = mybiodata[0] 

// let[myfirstName,myLastName,myAge]=mybiodata;
// console.log(myfirstName);


// we can add values too

// let[myfirstName,myLastName,myAge,mydegree="b.tech"]=mybiodata;
// console.log(mydegree);


// ==object destructuring==

// const mybiodata={
//     myfirst :"dino",
//     mylast :"suar",
//     myAge:22
// }
// let age = mybiodata.myage;
// let myfirst =mybiodata.myfirst;

// let {myfirst,mylast,myage,mydegree="b.tech"} = mybiodata;
// console.log(myfirst);



// 5 object properties 

//=>we can  now use dynamic properties
// let myname ="prabhakar";
// const mybio ={
//     [myname]:"hello how are you";
// [20+2]: "is my age"

// }
// console.log(mybio);

//we need to write Key and value . if both are same
// let myname ="Asmita lama";
// let myage =19
// const mybio ={myname,myage}
// console.log(mybio)


// 6 fat arrow function
//normal way of writing function

// console.log(sum());

// function sum() {
//  let a =5,b=6;
//  let sum = a+b
// return `the sum of the two number is ${sum}`  ;  
// }

//how to convert in into fat arrow function
// const sum = ()=>{      //one way to type 
//     let a =5; b=6;
//     let sum = a+b;
//     return `the sum of the two number ${sum}`; 
// }

// const sum = ()=>{      //second way to type 
//     let a =5; b=6;
//     return `the sum of the two number ${a+b}`; 
// }


// const sum = ()=>{      //third way to type 
//     return `the sum of the two number ${((a=5)+(a=6))}`; 
// }




// const sum = ( ) => `the sum of the two number is ${((a=5)+(b=6))}`; //fourth way
//  if your code use only one line then you also dont use return keyword and also you dont want to use this {}

// console.log(sum());

//spread operator
// const colors  =["red","green","black","white"];
// const mycolors =["red","green","black","white","yellow","black"];

//2nd time add one or more coolor on top and tell we need to write it agian
//  // om my colors array too =

//  const myfavcolors =["yellow","black",...colors]
// console.log(myfavcolors)

// // Es7 2016feature
// const colors  =["red","green","black","white"];
// const isPresent =colors.includes("red");
// console.log(isPresent)

// 2: **/
// console.log(2**3);


// ES8 2017 feature
//string padding
// object.value()
//object.entries()


// const message = "my name is dinosuar".padStart(27).padEnd(27);

// console.log(message)

// // Object.values
// const person ={ name: "fred",age:12}
// // console.log(Object.values(person)); 
// const arrobj =Object.entries(person); 
// console.log(Object.fromEntries(arrobj)); 


// ES2018
// const person ={ name: "fred",age:12}
// const sperson ={...person}
// console.log(person)
// console.log(sperson)

// Es2019
// const arr = [["zone_1","zone-2"],
//     ["zone_3","zone-4"],
//     ["zone_5","zone-6"],
//     ["zone_7",["zone-8","zone_9"]],
// ];

// console.log(arr.flat(2));//infinity you can use 
// Array.prototype.{Flat,flatMap}
// Object.fromEntries()

//ES2020
// 1- bigInt

// let oldnum = Number.MAX_SAFE_INTEGER;
// console.log(oldnum)
// console.log(oldnum+12)
// console.log(9007199254740991n+12n)
// let newNUm =9007199254740991n+12n
// console.log(newNUm)
// console.log(typeof(newNUm))

// #3 nullish coalescing

// Es2014
// "use strict";
// let x =3.14;
// console.log(x);


// section 7 arrays in javascript
//when we use var , we can stored only one value at a time


//   var friend1 ="dinosuar";
//   var friend2 ="yahoo";
// var myfriends = ["yahoo","dinosuar","prabhakar",true,45,male]
// in single variable if we want to store multiple element then we used array  


// whe we feel like storing multiple values in one variable the
//instead of var ,we will use array

//in javascript ,we have an array class, and 
//array are the prototype of this class

//example
// var myfriends = ["yahoo","dinosuar","prabhakar",true,45,male]
// var myfriends =new Array;//optional





// array subsection 1- traversal in array 
// navigate through an array 

// if we want to get the single data at a time  and also 
// if we want to change the data 
// var myfriends = ["yahoo","dinosuar","prabhakar"]
// console.log(myfriends[myfriends.length-1])

// if we want to check the length of element  of array 
// console.log(myfriends.length)

// we use for loop to navigate 
// var myfriends = ["yahoo","dinosuar","prabhakar"]
// // for loop

// for (let i=0; i<myfriends.length;i++ ){
//     console.log(`my friends name is ${myfriends[i]}`)
// }


// after es6 we have for ..in  andfor of loop too 


// for in loop  it provide index number
// var myfriends = ["yahoo", "dinosuar", "prabhakar"]
// for (let elements in myfriends) {
//     console.log(`my friends name is ${myfriends[elements]}`)
// }

// for of loop it produce objects
// var myfriends = ["yahoo", "dinosuar", "prabhakar"]
// for (let elements of myfriends) {
//     console.log(`my friends name is ${elements}`)
// }


// array.prototype.foreach()
// calls a function for each element in array
//  using function
// var myfriends = ["yahoo", "dinosuar", "prabhakar"]
// myfriends.forEach(function(element,index,array){
//     console.log(element + "index:" +index+"array"+array )
// })

// fat arrow function using forEach loop

// var myfriends = ["yahoo", "dinosuar", "prabhakar"]
// myfriends.forEach((element,index,array)=>{
//     console.log(element + " index: " +index+" array "+array )
// });

//array subsection 2 - searching and filter in array 
//array.prototype.indexof()
//returns the first (least)index of a element within the arrray equal
//to an element ,or -1 if none is found.it search the element from the 
//0 index number
// it is a case senstive 


// var myfriends = ["yahoo", "dinosuar", "prabhakar"]
// console.log(myfriends.indexOf("yahoo",1)); //nothing found


//array.prototype.lastIndexof()
//returns the last (greatest)index of a element within the arrray equal
//to an element ,or -1 if none is found.it search the element last to first
// var myfriends = ["yahoo", "dinosuar", "prabhakar" ,"yahoo"]
// console.log(myfriends.lastIndexOf("yahoo",1)); //nothing found



// Array.prototype.includes()
// determine whether the array contain a value ,
// returning true or false as appropriate


// var myfriends = ["yahoo", "dinosuar", "prabhakar", "yahoo", "technical"]

// console.log(myfriends.includes('yahoo', 4));



// Array.prototype.find()

// Arr.find (callback(element[, index,[,array]])[,thisArg])
// return the found element in array , if some element in the
// array satifies the testing function ,or undifined if not found 
// only the problem is that it return only one element

//  const prices =[200,58,99,776,98,877]
// //  prices>400
// const findelm = prices.find((currentval)=>{
//   return currentval<400;
// });
// console.log(findelm);

// console.log(prices.find((currentval)=>currentval<1400))



// array.prototype.findIndex()
//return the found index in the array , if an element in the 
//array satifier the  testing function , or -1 if not found

// console.log(prices.findIndex((currentval)=>currentval>1400))


// Array.prototype.filter()

//return a new array containing all elements of the calling
//array for which the provided fltering function return true
// if our condition not satified then it show empty array[] just like 1400

//  const prices =[200,58,99,776,98,877]
//  price <400

// const newpricetag = prices.filter((elem,index)=>{
//     // return elem <400
//     return elem >1400
// })
// console.log(newpricetag);


// Array subsection 3 - how to sort an array 

// Array.prototype.sort()

// the sort() method sorts the  elements of an array in place and 
// return the sorted array the default sort order is ascending ,built 
// upon converting the elements into  strings 
// then comparing thier sequences of utf-16 code units values

// const months = ["march","jan","feb","dec","nov"]
//   console.log(months.sort());

//   const array1 = ["1","30","4","21","10000","99"]
//   console.log(array1.sort());


//however, if numbers are sorted as strings,
//"25" is bigger than "100",because "2" is bigger than "1"

//because of this , the sort() method will produce an incorrect
//result when sorting numbers


// 4- array subsection 4 - perform CRUD
//  //array.prototype.push()
//  the Push() method adds one ormore elements to the
//  end of array and returns the new length of the array
//   add at the end 
// const animals =["dinosuar","goats","pigs","sheeps","hores"];

// const count = animals.push("dinosuar","suar")
// console.log(animals)
// console.log(count)


// Array.prototype.unshift()
// the unshift() method adds one more elelments to the
//beginning of an array and returns the new lenght of the array

// const animals =["dinosuar","goats","pigs","sheeps","hores"];

// const count = animals.unshift("dinosuar","suar")
// console.log(animals)
// console.log(count)


// 2-example

// const myNumbers = [1,2,3,4,5]
// const count = myNumbers.unshift(1,4)
// console.log(myNumbers)
// console.log(count)



// Array.prototype.pop()
//the pop() method removes the last element from an array and returs
//that element.this method changes the length of the array


// const animals = ["dinosuar","dinosaur","babu bhai","tera bhai hu ma"]
// console.log(animals)
// console.log(animals.pop())
// console.log(animals)

// Array.prototype.shift()
// the shift() method remove the first element from aaray and returns
// that removed element, the method changes the length of the array


// const animals = ["dinosuar","dinosaur","babu bhai","tera bhai hu ma"]
// console.log(animals)
// console.log(animals.shift())
// console.log(animals)


// 8 challenge Time
//   crud perform from  splice method 
// array.prototype.splice()
//adds and /or removes  elements from an array


// 1: add dec at the end of the array?
// 2: what is the returm  value of splice method?
// 3: update march to March (update)?
// 4: delete june from an array ?


// const months = ["Jan","march","April","June","July"]
//sol1:
// const newMonth =months.splice(months.length,0,"Dec");

// console.log(months);
// sol:2
// console.log(newMonth);
//  splice method return [ ] array whenever something deleted it stored into that particualar array

// sol:3

// const indexofmonth = months.indexOf('June')
// if (indexofmonth !== -1){
//     const updateMonths= months.splice(indexofmonth,1,"june");
//     console.log(months);
// }else {
//     console.log("NO such dat is found ")
// }

//   sol:4  
//  delete june
// const indexofmonth = months.indexOf('June')
// if (indexofmonth !== -1){
//         const updateMonths= months.splice(indexofmonth,1);
//         console.log(months);
//         console.log(updateMonths)
//     }else {
//             console.log("NO such dat is found ")
//         }

// if we want to delete all foward value then 
// const indexofmonth = months.indexOf('April')
// if (indexofmonth !== -1){
//         const updateMonths= months.splice(indexofmonth,Infinity);
//         console.log(months);
//         console.log(updateMonths)
//     }else {
//             console.log("NO such dat is found ")
//         }

//    5- Array subsection 4 - Map and reduce the method 
//     let newArray = arr.map(callbackvalue [,index[,ArrayB]]){
//     //return element for newArray , after executing something 
// }[,this arg]);

// returns a new array containing the reults of calling a 
// function on every element in this array

// const array1 = [1,4,9,16,25]



// let newArr =array1.map((curElem,index,arr)=>{
    //     return curElem>9
    // })
    // console.log(array1);
    // console.log(newArr);
    
    

//     const array1 = [1,4,9,16,25]
//     let newArr = array1.map((crrElm,index,Arr)=>{
//     return `index no = ${index} and the value is ${crrElm} belong to ${Arr}`
// })
// console.log(array1);
// console.log(newArr);

//it return new array without mutating the orginal array



// callenge time 

// 1: find the square root of each element in an array?
// sole1
// let arr =[25,36,49,64,81];

// let arrsqr = arr.map((crrElm)=>{
//     return Math.sqrt(crrElm);
// })
// console.log(arrsqr);


// 2:mutiple each element by 2 and  return only those elements which are greater than 10 ?
// sol2
// let arr = [2,3,4,6,8];

//we can use chaining method in map



// let arrsqr = arr.map((crrElm)=>{
// return crrElm*2;
// }).filter((crrElm)=>{
//     return crrElm >10
// }).reduce((accumulator,crrElm,index,arr)=>{
//     return accumulator += crrElm
// })

// console.log(arrsqr);



// --REDUCE method 


// flatter an array menas to convert the 3d and 2d array into a
//single dimensional array


// the reduce () method executes a reducer function (that you provide)
// on each element of the array , resulting in single output value 

// the reducer  function take four arguments ;


// accumulator
// current value 
// current index
// source Array

// let arr =[5,6,7];

// let sum = arr.reduce((accumulator, crrElm)=>{
//     return accumulator += crrElm;
// },7)
// console.log(sum);


// How to fatten an arrray 
// conveting 2d and and 3d arrray into one dimensional Array
// const arr = [["zone_1","zone-2"],
//     ["zone_3","zone-4"],
//     ["zone_5","zone-6"],
//     ["zone_7","zone-8"],
// ];

// let flatArr = arr.reduce((accum,currval)=>{
//       return accum.concat(currval);
// })

// console.log(flatArr);





// *****String in javascript*****//

// A javascript string is zero or more characters written inside quotes
// javascript strings are used for storing and manipulating
// you can use single or doublw quotes
// string can be created as primitives,
// from string literals,or as object , using the string () constructor


// let myName ="prabhakar";
// let myChannelName = 'codewithPrabhakar'


// let ytNAme = new String("code with prabhakar")
// console.log(ytNAme)


// console.log(myName)
// console.log(myChannelName)



//** How to find  the length of a srting**//
//string.prototype.length
//reflects the length of the string


// let myName ="prabhakar patel"
// console.log(myName.length);


//**Escape character **/

//  let anySentence ="we are the so-called \"viking\" from the north ." //backslah  use to esacpe from error 
// console.log(anySentence);

// if you dont want to mess ,simply use the allernate quates

// let anySentence ="we are the so-called 'viking' from the north ."
// console.log(anySentence);


//** finding  a string in a string * */

//string.prototype.indexOf(searchvalue[,fromIndex] )
//he indexOf()method returns the index of the (the postion of) the first 
// occurence of a specified text in a string
// if not fount it show -1
//space include


// const myBigData =" i am your friend dinosuar";
// console.log(myBigData.indexOf("a",6))


//javascript counts postions from zero.
// // 0 is the first postion in a string, 1 is the second ,2 is the third  



//string.prototype.lastIndexOf(searchvalue[,fromIndex] )
// //returns the index within the calling string object of the
// //last occurence of searchValue , or -1 not found


// const myBigData ="i am your friend dinosuar";
// console.log(myBigData.lastIndexOf("a",6))


//** searching for a string in a string**/
//string.prototype.serach(regexp)
//the search() method searches a string for a specified
//value and the returns the postion of the match

// const myBigData ="i am your friend dinosuar";
// let sData = myBigData.search("dinosuar");
// console.log(sData)


//the search() method cannot take a second start position argument 


//**Extracting string parts**//

//there are 3 methods for extracting a part of a string

//slice(start, end)
//substring(start, end)
//substr(start, length)


//the slice()method*
//slice() extract a part  of a string and returns the extracted part
// in anew string

//the method takes 2 parameters: the start postion,
//and the end postion (end not included)

// var str ="apple, banana, kiwi";
// // let res = str.slice(0,5)
// let res = str.slice(7,-2)
// console.log(res)

// the slice() method selects the Element starting at the 
// given start arugument , and ends at , but does not include
// the given end arugument

// note: the original Array will not be changed
//remember: javascript counts postions from zero . first postio is 0



// challenge time 
// Q: display only 280 Character of a string like the 
//one used in twitter


// let mytweets =`Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.

// Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then`

// let myActualTweet = mytweets.slice(0,280)
// console.log(myActualTweet);
// console.log(myActualTweet.length)



//*the substring() method*
// substring() is similar to slice()
// the difference is that substring() cannot accept negative indexed
// var str ="apple, bananaa ,kiwi";
// let res = str.substring(8,-2)
// console.log(res)


// // if we given negative value then the character are
// counted from the 0 pos


// *the substr method*
//substr() is similar to slice ()

// the differnce is that the second parametr specific the
// length of the extracted part 
// we can't add mot negative number in length

// var str ="apple, bananaa ,kiwi";
// let res = str.substr(7,-4)
// let res = str.substr(-4)
// console.log(res)



//** Replacing string content()**/

//string.prototype.replace(searchFor,replaceWith)

//the replace() method replaces a specified value
//with another value in string

// let myBigData =`I am your friend dinosuar and your dinosuar`
// let data =myBigData.replace("dinosuar","Dinosuar")
// console.log(data)


//point to remember
// 1: the replace() method does not change String
// it is called on. it returns a new String
// 2: by default the replace() method replaces 
// the first match 
// 3: by default , the replace() method is case senstive
//writing Dinosuar (with upper-case) will not work


//**extracting string characters**

// there are 3- methods for extracting string characters

// charAt(position)
// charCodeAt(postion)
// property access [ ] 



//*the charAt()method*

//the charAt()method returns the character at a 
//specified index(postion) in a string

// let str ="hello world"

// console.log(str.charAt(9))


//*the charCodeAt()method*
//the charCodeAt()method returns the unicode of the
//character at a specified index in a string :
// the method return a utf-16 Code 
// (an integer between  0 and 65535).

// the unicode standard provides a unique anumber for every 
// character , no matter the platform, device,application,
// or language .UTF -8 apopular uincode encoding which 
// has 8-bit code units

// var str ="Hello World";
// console.log(str.charCodeAt(0));

//property access
//ECMAScript 5 (2009) allows property access []on strings
// var str = "hello world"
// console.log(str[0])



// challenge time 
// Q: return the unicode the last  Character in a string 

// let str ="HELLO WORLD";
// let lastChar =str.length

// console.log(lastChar)
// console.log(str.charCodeAt(lastChar-1))




//** other useful methods **/

// let myName ="Prabhakar Patel"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// the concat() method 
//concat()joins two or more strings

// let fName = "yo"
// let fname = "beta"
// console.log(fName.concat(fname))
// console.log(fName.concat(" ",fname))


// string trim()*
// the trim() method removes whitespace from both side of a String

// var str ="             hello world         "
// console.log(str.trim());



// Converting a string to an array *//
// a string can be converted to an array with the 

// var txt ="a,b,c d|e,f"; //string
// console.log(txt.split(",")) //split on commas
// console.log(txt.split("")) // split on spaces
// console.log(txt.split("|")) // splite on pipe|




//*** section 8 - date and time object***/

//javascript Date objects represnt a single moment in time in a
//platform-independent format .date objects contain a numbers
//that reperesnt millisecond since 1 january 1970 utc

//** ceating date object 
//ther are 4 ways to create a new date object:


// new Date()

// new Date(year,month,day,hours,minutes ,seconds,miliiseconds)
// it takes 7 arguments
// new Date(miliiseconds)
//we cannot avoid month section
// new Date(date string)




// new date()*
//date objects are created with the new date()constructor.
// let currdate =new Date();
// console.log(currdate);
// console.log(new Date())

// console.log(new Date().toLocaleString());//  9/11/2019 , 1.25.01 pm
// console.log(new Date().toString());//  Wed sept 11 2019 13:25:01 gmt+0700



//Date.now
//returns the numeric value corresponding to current time- the number
//of milliseconds elapsed since january 1,1970 00:00:00 utc

// console.log(Date.now())


//**  new date (year,month,..)**

// 7 numbers specify year,month,day,hour,minute,second, and millisecond (in the order)
//note: javascript counts month from 0 to 11. is compolusory

//january is 0 december is 11
// var d = new Date(2021,11,24,10,33,30,0)
// console.log(d.toLocaleString())


//**new Date(datestring)**
// new Date(dateString) creates a new date object from a date String

// var d = new Date("october 13,2014 11:13:00");
// console.log(d.toLocaleString())

//**new Date(milliseconds)**
//new Date(milliseconds) creates anew date object as zero time plus millisecond
// var d= new Date(0); 1 jan 1970
// var d =new Date(1617989306204) 
// var d= new Date(86400000*2);
// console.log(d.toLocaleString())


//Dates Method

// const curDate = new Date()

// // how to get the indiviual date
// console.log(curDate.toLocaleString())
// console.log(curDate.getFullYear())
// console.log(curDate.getMonth()) //0-11 jan to dec
// console.log(curDate.getDate())
// console.log(curDate.getDay())


// //* how to set the indivisual date
// /
// console.log(curDate.setFullYear(2022))

//the setFullYear()  method can optionally set month and day

// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

//*times Method *//

// const curTime = new Date();

// how to get the indivisual Time
// console.log(curTime.getTime())
// // the getTime() method returns the number of millisecond since jan 1,1970
// console.log(curTime.getHours());
// // the  getHours() method returns the hours of a date as a number
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getUTCSeconds());
// console.log(curTime.getMilliseconds());



// //* how to set the indivisual time

// const curTime = new Date();
// console.log(curTime.setTime())
//the setTime()  method returns the number of
// setMilliseconds since jan,1,1970
// console.log(curTime.setHours(5));
//the getHours() methods returns the hours of
// console.log(curTime.setMinutes(10));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


// // pratice time
// var d =new Date().toLocaleTimeString();//11:18:48
// console.log(d)
// var d = new Date().toLocaleString(); //11/16/2015
// console.log(d)
// var d = new Date().toLocaleDateString(); //11/16/2015 ,1;18;48
// console.log(d)


//callenge Time Not yet decided

// (function(){
//     setInterval(()=>{
//         console.log(new Date().toLocaleString())
//     } , 1000)
// })();


//*** section 9 - Math object in javascript***//


// the javaScript Math object allows you to perform mathematical tasks on numbers

// console.log(Math.PI)

// *Math.round()*
//reeturn the vakue of x rounded to its nearest integer

// let num = 10.500
// console.log(Math.round(num));

// *Math.pow()*
// Math.pow(x,y)reutns the values of x to the power of y 

// console.log(Math.pow(2,3));
// console.log(2**3)


//Math.sqrt()
//Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

//*Math.abs()*
//Math.abs(x) return the absolute(postive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// *Math.ceil()*
// Math.ceil(x) returns the value of x rounded up to its nearest Integer


// console.log(Math.ceil(4.4))
// console.log(Math.round(4.4))
// console.log(Math.ceil(99.1))
// console.log(Math.round(99.6))


// Math.floor()
// Math.floor(x) returns the value of x down to nearest integer 

// console.log(Math.floor(4.7))
// console.log(Math.floor(91.1))


// *Math.min()*

// Math.min( )can be used to find  the lowest value in a list of arugument

// console.log(Math.min(0,150,30,20,-8,-200));


// *Math.max()*

// Math.max( )can be used to find  the highest value in a list of arugument
// console.log(Math.max(0,150,30,20,-8,-200));



// *Math.random()*
// Math.random() returns a random number between 0 (inclusive), and 1 

// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100))//0 to 9


// *Math.trunc()*
// the trunc() method returns the integer part of a number front wali value return karta ha 
// console.log(Math.trunc(4.6))
// console.log(Math.trunc(-99.1))


// practice Time 
// if the arugument is a positive number , Math.trunc() is equivalent to Math.floor()
// if the arugument is a negative number , Math.trunc() is equivalent to Math.ceil()

// section 10 - document object model in javscript

// 1 whindow is the main container or we can say the 
// global object and any operation realted to entire 
// browser window can be a the part of window object

// forex= the histroy or to find the url etc

// 1 whereas the DOM is the child of window  Object


// 2-all the members  like objects , methods or properties
// if they are the part of window object then we do not Referr 
// the window object .since window is the global object
// so you do not  have to write down  window 

// -it  will be figured out by the runtime

// foe example
//  =>window .screen or just screen is a small information 
//object about physical screen dimensions
// => window.location giving the current URL
// => window.document or just document is the main Object
// of the potentially visible (or better yet: rendered)
// document object model /dom 


// 2- where in the dom we need to refer the document,
// if we want to use the document object , methods or properties
// for example
// => document.getElementById()

// 3 window has methods , properties and Object
// ex- setInterval() or setTimeout() are the methods
// where as Document is the Object of the window and
//it also has a screen object with properties 
// describing the physical display 

//now ,i know  you a doubt like  we have  seen methods
// and Object of the global That is window  .but what about 
// the properties  of the window  object 

// so example of window object properties are 
// innerHeight,
// innerWidth, and there are many more 
// lets see some practical in DOM HTML File


// let's see some practical in DOM HTML FILE


//*********************DOM vs BOM **************************/
//=> the DOM is the document object model ,which deals with document ,
// the html Element themeselve else.g document and all traversal you
// would do in it ,event  etc

// for Ex: ..
// change the background color to red 
// document.body.style.background ="red";


// =>the BOM is the browser object which deals with browser components
// aside from the document , like history, location,navigator and screen
// (as well as some other that vary by browser).or 
// In simple meaning all the window  operations which comes under BOM are performed
// using BOM

// let,s see more practical on histroy object
//function alert/confirm / prompt are also apart of BOM
//they are directly not related to the document 
//but the represent the pure browser method of communicating with the user


// alert(location.href); //shows current URL
// if (confirm("want to visit youtube?")){
//     location.href="http://ww.youtube.com"; //redirect the browser to
// }


// section 3:navigate through the DOM  

//1: document.documentElement
//returns the elements that is the root element of the document 
//    2: document.head
//   3:document.body
//     4: document.body.childNodes (includes tab,enter and whitespace)
//     list of the direct children only 
//     5:document.children(without text NodeList, only regular Elements)
// 6:document.ChildNodes.length


// // practice time 
// how to check whether an element has child node or not?
// document.body.hasChildNodes()

// we will use hasChildNodes()



//* Practice time
// How to find the child in DOM tree 
// firstchild vs FirstElementchild
// lastChild  vs lastElementChild  

// const data =document.body.firstElementChild;
// //undefined
// data 
//data.FirstElementchild
//data.FirstElementchild.firstElementChild
//data.FirstElementchild.firstElementChild style color ="red"
// vs 
// document.querySelector(".child-two").styple.color ="yellow"

// how to find parent Nodes

// document.body.parentNode
// document.body.parentElement

// how to find or access the siblings
// document.body.nextElementSibling()
// document.body.nextSibling()
// document.body.previousSibling()
// document.body.previousElementSibling()


//4 how to search the elements and the Reference//
// we will see the file now





// *****section 11 - Events in Javascript*****//

//html events are"thing" that happen to HTML elements
//when javsript is used in HTML pages, javascript on "react" on these events.



//HTML Events
//An HTML event can be something the browser does , or something a user does

//here are some  example of HTML events :

//AN HTML web page has finshed loading
//AN HTML input  field was clicked
//AN HTML buttom was clicked
// often, when events happen ,you may want to do something

// javascript lets you execute code when events are detected 
//
//HTML allows event handler attributes, with javascript code, to be added to HTML elements




//section1 4ways of writing events in javscript

//1: USing Inline events alert();
//2: By calling a function ( we already seen and most common way of writing)
//3:using Inline events (HTML onclick=""property and elements.onclick)
//4:using Event listenrs (addEventListner and  IE's attachEvent)


//check the events html file

// section 2: what is Event object?
// event object is the parent object of the event object
//for example
// MouseEvent ,FocusEvent,keyboardEvent etc



//section 3 MouseEvent in javascript
//The MouseEvent Object
//Events that occur when the  mouse interacts with the html 
//document belongs to the mouseEvent object



// Section 4 Keyboard in javaScript

// Events that occur when user presses a key on the keyboard
// belongs to KeyboardEvent Object
// https://www.w3schools.com/jsref/obj_keyboardevent.asp



// section 5 InputEvent in javaScript

//the on change event occurs when the value of the elements has be changed 

//for radiobuttons and checkboxes , the on change event occurs when the 
//checked state has been changed


//**********************SECTION-Timing Based Event in JS **********************/

//The window object execution o f code at specified time intervals

//these time intervals are called timing events.

// the  two key methods to use with javscript are:


// setTimeout(function,millisecond)
//Executes a function after waiting a specified number of milliseconds

// setInterval(function, millisecond)
// same as setTimeout(), but repeats the execution of the fuction continously


// 1 setTimeout()
// 2 clearTimeout()
// 1 setInterval()
// 2 clearInterval()




// *************************************************************************************//

//object oriented Javascript

// *************************************************************************************//




// whta is object literal?

// object literal is simply a key :value pair data structure
// storing variable and function toghteher in one container
//we can refer this as an object

// object = school bag 

// How to create an object 

// 1st way 

// let biodataa= {

// myName:"codewithdinosuar",
// myAge:25,
// getData: function(){
// console.log(`${biodataa.myName} and ${biodataa.myAge}`)
//  }
// }
//   console.log(biodataa.myAge);
//   console.log(biodataa.myName);
//   biodataa.getData()


// 2nd way no need to write functions as well after es6  


//   let biodataa= {

//   myName:"codewithdinosuar",
//   myAge:25,
//   getData (){
//       console.log(`${biodataa.myName} and ${biodataa.myAge}`)
//    }
//   }
//     console.log(biodataa.myAge);
//     console.log(biodataa.myName);
//     biodataa.getData()

// what if we want object as a value inside an Object


// let biodataa= {

// myName:{
//     realName:"dinosuar",
//     Channel: "mera dost"
// },
// myAge:25,
// getData (){
//     console.log(`${biodataa.myName} and ${biodataa.myAge}`)
//  }
// }
//   console.log(biodataa.myName.Channel)



// 2-what is this object?

//the defination of "this "object is that it contain the current context

//the this object can have different values depending on where it is placed.


// for example1

// console.log(this.alert("Awesome"));
//it refers to the currrent context and that  is window global object


// // ex2

// function my_name(){
//     console.log(this);
// }
// my_name();


// ex3

// let my_Name ="dinosuar";
// function my_name(){
//     console.log(this.my_Name);
// }
// my_name();


// ex4

// const obj ={
//     myAge :26,
//     myName(){
//         console.log(this);
//     }
// } 

// obj.myName();

//  ex5
//  this object will not work with arrow function 

// const obj = {
//     myAge: 26,
//     myName: () => {
//         console.log(this)
//     }
// }
// obj.myName();


// // ex6
// let biodata ={
//     myName:{ 
//         realname:"codeWithprabhakar"
//     },
// //thing to remeber is that themyname is the
// myage :26, 
// getdata (){
//     console.log(`my name is ${this.myName.realname} and my age is${this.myage} `)
// }   

// }
// biodata.getdata();


// // call method is used to call the method of another object

// or with call (), an object can use method belonging to another object

//

// ***************************Advanced javascript*********************************//

//1: Event propagation (event bubbling and event capturing)


// //check html file

//// 2: higher Order function
// fumction which tale another function as an arguments is called HDF
//wo function jo dusre ko as arugument accept karta hai use HDF


// 3:callback Function

// function which  get passed as arrgument  to another function  is called CBF
// A Callback function is a function that is passed as an argyument to
// another function , to be " called back " at a later time .
// jis bhi function ko hum  kisi or function ke under as an arguments passed 
// karte hai then usko hum callback fun bolte hai 

// // we need to create  a calculator

// const add =(a,b)=>{
// return a+b;
// }
// const subs =(a,b)=>{
//     return math.abs(a-b);
// }

// const mult =(a,b)=>{
//     return a*b;
// }

// const calculator =(num1 ,num2,operator)=>{
// return operator(num1,num2)
// }

// console.log(calculator(5,3,mult))
// console.log(calculator(5,3,add))


// / i have to do the  hardcoded for each opertaion which is bad
// we will use the call back and the HDF to make  it simple  to use


//  how to instead of calling  each function  indivisually we can call it
//  by simply using one function that is calculator

// console.log(calculator(5,3,subs))
// console.log(calculator(5,3,add))
// console.log(calculator(5,3,mult))


//  In the abbove example , calculator is the higher- order function 

// which accepts three arguments , the third one being the callback 
//  here the calculator is called the higher order function because it take s
// another function as an arrguments


//  intrview question
// difference between higher order function and callback function?

// //** Asynchronous javascript **/
// 1 work =10 min
// 2 work =5 min depend on work load  first execute 
// const fun2 =()=>{
//     setTimeout (()=>{

//         console.log(`function 2 is called`)
//     },2000);
// }
// const fun1 = () =>{
//     console.log(`function 1 is called`)
//     fun2();
//     console.log(`function 1 is called again`)
// }

// fun1();


// // 6: synchronous javascript prog

// 1 work =10min first come first out
// 2 work = 5s

// const fun2 = ()=>{
//     console.log(` Function 2 is called`)
// }
// const fun1 = ()=>{
//     console.log(`Function 1 is called`)
//     fun2();
//     console.log(`function 1 is called again`)
// }
// fun1();

// what is event loop in javascript
// ppt explain


// Function currying

// const sum =(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3)
// sum(5)(3)(8) 

// function sum (num1){
//     // console.log(num1)
//     return function(num2){
//         // console.log(num1,num2)
//         return function(num3){
//             console.log(num1+num2+num3)
//         }
//     }
// }

// sum(5)(3)(8) 



// callback hell 


// setTimeout(()=>{
// console.log(`1 work is done`)
//     setTimeout(()=>{
//      console.log(`2 work is done`)
//             setTimeout(()=>{
//             console.log(`3 work is done`)
//                 setTimeout(()=>{
//                 console.log(`4 work is done`)
//                   setTimeout(()=>{
//                   console.log(`5 work is done`)
//                     setTimeout(()=>{
//                     console.log(`6 work is done`)
//                   },1000)
//               },1000)
//           },1000)
//       },1000)
//     },1000)
// },1000)


// // //5 Hoisting in javascript

//  we have a creation phase and execution phase
// Hoisting in a javascript is a mechanism where variable and functions
// declartiom  are moved to the top of their scope before the code execute


// for Example 
// console.log(myNAme);
// var myNAme ;
// myName ="dinosuar";

//  How it will be in output during creation phase 

// var myNAme  = undefined ;
// console.log(myNAme);
// myNAme= "dinosuar";

//  In ES2015 (a.k.a ES6) ,Hoisting  is  avoided by using the let keyword
//  instead of var .(the other difference is that variable declared )
// with let  are local to the surrounding block , not the entire function.)

// //6- what is scope chain  and lexical scoping in javacript

// the scope chain is used to resolve the value of variable  names
// in js 

//  // scope chain in js  is lexically defined , which means that we can 
// // see what the scope chain will be by loooking at the code

//   At the top , we have the global scope which is window  object
// in the browser 

// lexical scoping means  Now  , the innner  function  can getv access to 
//  thier parents function variable but the vice versa is not true 


// for example

// let a =" hello bro"//global scope 
// const first =()=>{
//     let b ="how are you?"
//     const second =()=>{
//         let  c = "yo br0000"
//         console.log(a+b+c)
//     }
//     second();
//     console.log(a+b+c); //i can't use c
// }
// first();



// 7- what is closure in javacript

//  A closure is the combination of afunction bundled together (enclosed )with references
// to its surrounding state(the lexicals enviroment),

//  In another words a closure gives you
// access to  another  functions scope from an inner function.

// In javascript ,closure are created every time  afunction is created at function creation time


// for example
// const outerfunc =(a)=>{
//     let b=10;
//     const innerfunc =()=>{
//         let sum = a+b;
//         console.log (` the sum of the two number is ${sum}`);
//     }
//     innerfunc();
// }
// outerfunc(5)


// it same like lexical scoping
// example

// its same like lexical scoping


//  one more example

// const outerfunc =(a)=>{
//         let b=10;
//         const innerfunc =()=>{
//                 let sum = a+b;
//                 console.log (` the sum of the two number is ${sum}`);
//             }
//            return innerfunc;
//         }
//         let checkclousure = outerfunc(5)
//         console.log(dir.checkclousure());

// "use strict"
// let x ="yo bro";
// console.log(x)




//***********  BACK TO ADVANCED JAVASCRIPT*********

// *******************BONUS JSON************//

// JSON  used as String

// json.stringify turns  a javascript  object  into JSON text and 
//  stores that json text in a string eq:

// var my_object = { key_1:"some text", key_2:true,key_3:5}

// var object_as_string = JSON.stringify(my_object)
// { key_1:"some text", key_2:true,key_3:5}
// console.log(typeof(object_as_string));
// "string" 

// JSON.parse turns a string of JSON into a javascript object, eq:

// var object_as_string =JSON.parse(object_as_string);
// console.log(typeof(object_as_string));

// 7- ajax call using XMLHttpRequest

// how to handle with the events and callback

// XMLHttpRequest (XHR)object used to interacrt with Servers 
// you can retrieve data from from a URL without having to do a full

// // page  refer . this enables a web pages to update just part
// of a page without disrupting what  the user is doing
// XMLHttpRequest is used heavily in ajax  programming 

// const request = new XMLHttpRequest();
// we need to call  to api or request the api using GET method ki ,me jo 
// //url pass kar kr rha hu uska data chaiye
// request.open('GET',"http:// covid-api,mmediagroup.fr/v1");
// request.send();// we need to send  the rerquest  and its sync  so we need  to
// add the event to load  the data adn get interacrt


// // to get the reponse 
// request.addEventListener("load",()=>{
//     console.log(this.ResponseText)
// })

