const me ="lovely";
let myfavcolor = "black";

console.log(me);
console.log("blue");


const thegazette ={
  member1: "ruki",
  member2: "uruha", 
  member3: "aoi",
  member4: "reita",
  member5: "kai", 
};

console.log(thegazette);
console.log(thegazette.member1);


const thegazetteMember ={
  name: "ruki",
  birth: "1982.02.01",
  position: "vocal",
  height: "162cm",
  haircolor: "blonde",
  gender: "male",
}

const thegazetteMember02 ={
  name: "uruha",
  birth: "1981.06.09",
  position: "guitar01",
  height: "177cm",
  haircolor: "brown",
  gender: "male",
}

const thegazetteMember03 ={
  name: "aoi",
  birth: "1980 or 79(Korean birth).01.20",
  position: "guitar02",
  height: "171cm",
  haircolor: "black",
  gender: "male",
}

const thegazetteMember04 ={
  name: "reita",
  birth: "1981.05.28",
  position: "Bass",
  height: "172cm",
  haircolor: "lightblonde",
  gender: "male",
}

const thegazetteMember05 ={
  name: "kai",
  birth: "1981.10.28",
  position: "Drum",
  height: "174cm",
  haircolor: "brown",
  gender: "male",
}

console.log(thegazetteMember.position);
console.log(thegazetteMember02.height);
console.log(thegazetteMember03.birth);
console.log(thegazetteMember04.gender);
console.log(thegazetteMember05.name);

const kiryu = ["mahiro", "mitsuki", "kujyo", "hiyori", "junji"]

console.log(kiryu);
kiryu.push("satoko");
console.log(kiryu[3]);


const familly = ["father", "mother", "sister", "grandmother", "puppy01", "puppy02", "me"]

console.log(familly);
console.log(familly[5]);


function animal(dog1, dog2){
  console.log(dog1, dog2);
}

animal("gunhee", "taehee");


const cute = {
  animal: function(dog1, dog2){
    console.log(dog1, dog2);
  },

  character: function(character1, character2){
    console.log(character1, character2);
  }
}

cute.animal("gunhee","taehee");
cute.character("pikachu","hellokitty");



const calc = {
   plus: function(plus1, plus2){
    console.log(plus1 + plus2);
  },

  minus: function(minus1, minus2){
    console.log(minus1 - minus2);
  },


  multi: function(multi1, multi2){
    console.log(multi1 * multi2);
  },
  

  divide: function(divide1, divide2){
    console.log(divide1 / divide2);
  },

  power: function(power1, power2){
    console.log(power1 ** power2);
  }
};



calc.plus(40, 15);
calc.minus(60, 36);
calc.multi(4, 60);
calc.divide(90, 30);
calc.power(3, 4);



