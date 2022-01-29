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




