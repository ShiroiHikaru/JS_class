//--------------------------1. const and let-------------------------- //

const a = 5;
const b = 2;
let myName = "heeyeon";

//number : 숫자, string : 문자 //
// const(상수) : 절대로 바뀌지 않는 값 , 쓸때 "" 넣지 말기//
// let : 새로운걸 생성할 때 사용(업데이트), 바뀔 수도 있는 코드 //
// ""를 추가할 경우 숫자가 아닌 문자로 인식 //

// 니코쌤의 경험으로는 const을 기본으로 하고 변수를 업데이트 해야할 경우에만 let을 사용한다.//
// 기본적으로 const을 쓰고 필요한 경우에만 let을 사용 //
// 예전에는 "var"을 사용했는데 이상한 규칙으로는 원한다면 어디서든 업데이트가 가능하다. 단점은 언어를 통한 보호를 받지 못한다. 어떠한 규칙도 통한다//
// 요약 : 항상 const , 가끔 let , Nope! var //

// myName >> variable에는 띄어쓰기를 할 수 없기 때문에 다음단어의 첫문자를 대문자로 써서 띄어쓰기를 대신한다 //
// 파이썬의 경우는 단어들 뒤에 _ 를 써서 띄어쓰기를 표시한다 //


//--------------------------2. true and false and null-------------------------- //

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "Baek Hee yeon"
console.log("your new name is" + myName);


const amIFat = null;
let something;
console.log(something, amIFat);

//true = "참, 켜져있음" , false = "거짓, 꺼져있음" , null = "비어있음, 아무것도 없음(자연적으로 절대 발생할 수 없음)" underfined ="variable이 메모리에 만들어 지고 컴퓨터가 인지하고 있지만 값이 없는 경우" - 문자가 아닌 타입//
// 파이썬에서는 null 대신 None //

//--------------------------3. array : 순서가 있는 묶음-------------------------- //

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];



// Get Item from Array//
console.log(daysOfWeek);

// array : variable을 그룹화 시키는 경우 만들기 위해선 [] 기호를 사용할 것 , 각각의 항목은 ","로 구분할것 //
// array의 목적 : 하나의 variable 안에 list를 가지는 것 //
// array 안의 데이터에 접근하고 싶은 경우 variable의 이름을 적고 그 옆에 대괄호를 열어서 항목에 해당되는 숫자를 적어준다//
// 컴퓨터의 경우 숫자를 0부터 세기 때문에 이점을 유의하여 데이터를 추출한다. ex)"mon(0)", "tue(1)", "wed(2)"...//

// Add one more day to the array (기존의 array 항목에 새로운 리스트를 추가) //
daysOfWeek.push("sun");
console.log(daysOfWeek);
//push : 항목 하나를 array에 추가해줌 //


const tobuy = ["potato", "apple", "pizza"];
tobuy.push("kimbab");

console.log(tobuy[2]);

const student1 = "gunhee";
const student2 = "taehee";
const student3 = "heeyeon";
const student4 = "gildong";

const student = ["gunhee", "taehee", "heeyeon", "gildong"];

console.log(student[3]);
student.push("jooyeon");
student.push("eunji");
student.push("somi");

console.log(student);


//--------------------------4. object : 이름이 있는 묶음-------------------------- //

const playerName = "heeyeon";
const playerPoint = "121212";
const playerHandsome = "false";
const playerFat = "little bit";

//object를 만들 때에는 [] 괄호가 아닌 {} 괄호로 시작해서 열것 //
//object 안에서는 = 를 사용하지 않는다. : 를 사용할 것 //
// const player = {
//   name: "heeyeon",
//   points: 10,
//   fat: true,
// }//property를 가진 데이터를 저장하게 해줌//

// console.log(player);
// console.log(player.name);
//console(player).log(name)//

// console.log(player);
// player.points = player.points + 15;
// player.lasName = "potato";
// console.log(player.points);


const dog = {
  name: "gunhee",
  age: 3,
  type: "dog",
  gender:"male",
  dogtype:"pomerian",
}

const dog2 = {
  name:"taehee",
  age: 1,
  type:"dog",
  gender:"female",
  dogtype:"pomerian",
}

console.log(dog.age);
console.log(dog.gender);
console.log(dog.dogtype);

console.log(dog2.gender);

//--------------------------5. function : 계속 반복해서 사용할 수 있는 코드조각-------------------------- //

// function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다.//

function sayhello(nameOfPerson, age){
  console.log("hello! my name is " + nameOfPerson + " and I'm " + age);
}

// ()가 function을 실행하는 방법 //
// argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법 //

sayhello("heeyeon", 27);
sayhello("gunhee", 3);


function plus(a, b){
  console.log(a + b);
}

plus(8, 60);
// 이름은 원하는대로 상관없다, 단지 기억할거는 적힌 순서대로 데이터를 가져간다(순서가 매우 중요) //


function divide(a, b){
  console.log(a / b);
}

plus(60,8);
divide(98, 20);


function minus(a, b){
  console.log(a - b);
}

minus(150,30);



const fruit = {
  name : "apple",
  plus: function(otherFruitName){
    console.log("I want " + "buy " + otherFruitName);
  },
};

console.log(fruit.name);
fruit.plus("banana");


const player = {
  name: "gunhee",
  sayhello: function(otherPersonsName){
    console.log("hello!" + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayhello("heeyeon");



function sayhello(){

}


