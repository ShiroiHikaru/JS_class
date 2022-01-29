// function sayhello(nameOfPerson, age){
//   console.log("hello my name is" + nameOfPerson + " and I'm" + age);
// }

console.log("hello");
sayhello("gunhee", 3);
sayhello("taehee", 1);


function plus(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber)
}

plus(30, 50)

function divide(a, b){
  console.log(a / b);
}

divide(150, 30)


const player = {
  name: "lisa",
  sayhello: function(otherPersonsName){
    console.log("hello " + otherPersonsName + " nice to meet you")
  },
};

console.log(player.name);
player.sayhello("hee")



const tobuy = ["potato", "tomato", "pizza"];
console.log(tobuy);
tobuy[2]="water";
console.log(tobuy);
tobuy.push("fish");
console.log(tobuy);



//  계산기 정답

// const calc = {
//   plus: function(plus1, plus2){
//    console.log(plus1 + plus2);
//  },

//  minus: function(minus1, minus2){
//    console.log(minus1 - minus2);
//  },


//  multi: function(multi1, multi2){
//    console.log(multi1 * multi2);
//  },
 

//  divide: function(divide1, divide2){
//    console.log(divide1 / divide2);
//  },

//  power: function(power1, power2){
//    console.log(power1 ** power2);
//  }
// };

// calc.plus(40, 15);
// calc.minus(60, 36);
// calc.multi(4, 60);
// calc.divide(90, 30);
// calc.power(3, 4);


const age = 96;
function calcKrAge(ageOfForeigner){
  ageOfForeigner + 2;
  return "hello";
}

const KrAge = calcKrAge(age);

console.log(KrAge);

// const age = 96;
// function calcKrAge(96){
//   return  98;
// }

// const KrAge = 98;

// console.log(KrAge);


// Return : 누군가가 function을 실행할때 대체되는 것. function이 function밖과 소통하는 방법. 무언가 return할 경우 그 function이 return하는 값과 같아진다.

const calc = {
  plus: function(plus1, plus2){
   return plus1 + plus2;
 },

 minus: function(minus1, minus2){
   return minus1 - minus2;
 },


 multi: function(multi1, multi2){
   return multi1 * multi2;
 },
 

 divide: function(divide1, divide2){
   return divide1 / divide2;
 },

 power: function(power1, power2){
   return power1 ** power2;
 },
};

const plusResult = calc.plus(40, 15);
const minusRresult = calc.minus(plusResult, 10);  
const multiRresult = calc.multi(10,minusRresult);
const divideResult = calc.divide(multiRresult, plusResult);
const powerResult = calc.power(divideResult, minusRresult);


const fruit = {
  apple: function(vitamin1, vitamin2){
    return vitamin1 + vitamin2;
  },

  banana: function(vitamin3, vitamin4){
    return vitamin3 + vitamin4;
  },

  mango: function(vitamin5, vitamin6){
  return "I hate Fruit!";
},
};

const appleResult = fruit.apple("a", "c");
const bananaResult = fruit.banana("E", "D");
const mangoResult = fruit.mango(10, 5);


 // alert의 기능은 메세지를  경고문으로 보여주는 기능
 // function은 나를 위해 무언가를 해주는 역할
 

 const season = {
   spring: function(march, may){
     return "flower";
   },
 };

 const seasonspring = (3, 5);


//한번 return을 하게 되면 fuction(작동을 멈추고)은 끝난다. 그러므로 return은 처음이자 마지막에 사용할것


