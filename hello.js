console.log('hello world')
console.log('hello Javascript')

//const money = '10,000';

const say = `안녕하세요\n내 나이는 28살이야!`;

console.log(say);

typeof '문자열'

// '', "", `` 전부 문자열

const quote = 'how\'re you?'
console.log(quote);

/* 문장의 줄바꿈, 문장 안에 부호를 사용해야 할 경우에는 \를 붙일 것

    문장의 줄바꿈 : \n
    문장의 구분점 : \' << 이 경우에는 문자열을 감쌌을 때 같은 부호를 사용 했을 경우
    ex) 'how're you?' - > 'how\'re you?'
*/

/*
    parseInt('') > 1,2,3...400 과 같은 문자열의 "정수"를 숫자로 변경, 본인이 해석할 수 있는 한에서 값을 추출해준다.
    parseFloat('') > 0.1, 0.34, 0.056과 같은 문자열의 "소수"를 숫자로 변경

    프로그래밍에서는 같은 것을 2개로 만들지 않기에
    2개로 만든 경우는 흔하지 않고 굳이 2개로 만든 경우에는
    별도의 사유가 있다고 볼 수 있다.

    .substr() >> 문자열을 자르는 속성
    .substring()

    대부분의 경우 이름이 다르면 서로 다른 역할을 담당하고 있는 것.
*/

    //parseInt
    const banana = parseInt('550') + 400;
    const apple = parseInt('230') + 500;

    console.log(banana+apple);

    //parseFloat
    const FloatNuN1 = parseFloat('0.56') * 0.562;
    const FloatNuN2 = parseFloat('43.5') * 3.42;
    
    console.log(FloatNuN1*FloatNuN2);

    console.log(4**5);


/* 

더하기는 문자열이 아닌 애들이 문자로 바뀌고, 
빼기, 곱하기, 나누기는 숫자가 아닌 것들이 숫자로 바뀐다

더하기 : 문자로 변경
빼기, 곱하기, 나누기 : 숫자로 변경


웬만해서는 같은 것끼리 묶어주는 것이 헷갈리지 않고 좋다.

*/


// 더하기
console.log('hello' + 40); console.log('13' + 50);// 문자열 + 숫자 -> 문자열이 아닌 애가 형변환

//빼기
console.log('hello' - 50); 
// 문자열 - 숫자 -> 숫자가 아닌 것이 숫자로 변경 숫자로 바뀌면서 NaN값으로 바뀜 여기서는 Number()가 사용

console.log('50' - 25);
// 이 경우도 마찬가지지만 Number()가 아닌 parseInt()가 적용됨


//  변수 선언하기

let change = '바꿔라';
change = '바꿨다';

//document.write(change);

let letter = 'hello world! my name is heeyeon!';

let letter2 = letter;

console.log(letter2);


let motherNum = 5;
motherNum += 4;
// document.write(motherNum);


let string01 = '엄청 기~~~~이~~다란 문자열 입니다.'
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);
console.log(string01);

const value = '나는 상수';

// value = '상수지롱~';

// console.log(value);


let a = 5;

let b = 3;

let c = a;

a = b
b = c

//document.write(a);
//document.write(b);


if(true){
    console.log('hello, if!');
}
if(false){
    console.log('hello if!');
}

/*const score = prompt('당신의 점수는 몇점입니까?');
if(score >= 90){
    document.write('A+');
} else if(score >= 80){
    document.write('A');
} else if(score >= 70){
    document.write('B+');
} else if(score >= 60){
    document.write('B');
} else{
    document.write('F');
}*/



//과일이라는 이름의 변수 입력 창
const fruit = prompt('찾으시는 과일은 무엇인가요?');

//if 문으로 풀어볼 경우
if(fruit === '바나나'){
    document.write('바나나는 길어~');
}else if(fruit === '사과'){
    document.write('사과는 빨개~');
}else if(fruit === '멜론'){
    document.write('올 때 메로나~');
} else {
    document.write('우린 그런 작물은 안키워~');
}


//switch 문으로 풀어볼 경우
switch(fruit){
    //switch 조건값과 case의 값이 일치해야 실행됩니다.
    case '바나나':
    document.write('바나나는 1송이에 3,500원 입니다.');
        break;//연속실행을 멈추는 구간
    case '사과':
    document.write('사과는 1kg에 5,500원 입니다.');
        break;
    case '멜론':
    document.write('멜론은 1kg에 23,000원 입니다.');
        break;
    default://default 에서 마무리는 ;이 아닌 :로 마무리 case 사용할 필요 없음
        document.write('입력하신 과일은 우리 매장에서 취급하지 않습니다.');
}


let cond = true
let blank = '';

if(cond){
    blank = '참';
} else {
    blank = '거짓';
}

switch(cond){
    case true:
    blank = '참';
        break;
    case false:
    blank = '거짓';
        break;
}
//let blank = cond ? '참' : '거짓';


//while 문 공식

let i = 0; //변수 선언
while(i < 100){ // i가 100보다 작을 경우
    console.log('문장반복 100번');
    i++;
}//숫자를 "1"부터가 아닌 "0"부터 세니까

for(let p = 0; p < 100; p++){
    console.log('1부터 100까지의 출력 vol.01');
}

for(let nN = 1; nN <= 100; nN++){
    console.log('1부터 100까지의 출력 vol.02')
}



// 별찍기 숙제
for(let h = 0; h < 5; h++){
    console.log('*'.repeat(h + 1));
}

/* 내가 이해한 방식
h가 0이고 5보다 작을 경우 1씩 증가
i가 0일 경우 1증가
i가 1일 경우 1+1 2증가
i가 2일 경우 2+1 3증가
i가 3일 경우 3+1 4증가
i가 2일 경우 4+1 5증가
*/

// 역순 별찍기
for(let g = 5; g >= 1; g--){
    console.log('*'.repeat(g - 1));
}


for(let w = 0; w < 5; w++){
    console.log('*'.repeat(w));
}


for(let w = 0; w < 5; w++){
    console.log('*'.repeat(5 - w));
}


// 1,3,5,7,9 별찍기
for(let q = 1; q < 10; q++){
    if(q % 2 === 1){
        console.log('*'.repeat(9 - q))
    }
}

