//---------------- 1장 Hello world! ----------------//

alert('hello world!');

//script 태그 : <script> 태그는 HTML 문서 대부분의 위치에 삽입할 수 있다. //
//ex) <script>alert('hello world!');</script>//

// 요약 //
//1. 웹페이지에 자바스크립트를 추가할려면 <script> 태그를 사용//
//2. type와 language 속성은 필수 X//
//3. 외부스크립트 삽입법 : <script src="파일명.js"></script> , 복수의 스크립트를 삽입할 경우 여러개 사용 가능 //



//---------------- 2장 코드 구조 ----------------//

// 1. 문 //
//문(statement)은 어떠한 작업을 수행하는 문법구조(syntax structure)와 명령어(command)를 의미
//코드에는 원하는 만큼 문을 작성할 수 있다. 이때 서로 다른 문은 세미콜론으로 구분한다.//

//일반적인 추가 예시//
alert('my'); alert('Name'); alert('is')

//가독성을 높이기 위해 각 문을 서로 다른 줄에 작성한 경우(올바른예시)//
alert('hee');
alert('yeon');

// 2.세미콜론 //
//줄 바꿈이 있다면 세미콜론을 생략할 수 있다.//

alert('my old is')
alert('27')


//대부분의 경우, 줄 바꿈은 세미콜론을 의미하지만 항상 의미하지 않고 아래의 경우라면 세미콜론을 의미하지 않는다.//
alert(3 + // "+"로 끝나는 경우 '불완전한 표현식'으로 인식해 세미콜론이 필요하지 않다//
  1
  +2);


  // 반면, 세미콜론이 정말로 필요하지만 자바스크립트가 이를 추정하지 못하는 상황도 존재한다. //

  //에러예제//

  // alert()

  // [1, 2].forEach(alert)

  //한줄 주석//
  /*여러줄 주석*/
  
  // 주석 안에 또 다른 주석을 넣을 수 없다 (중복 주석X) //



//---------------- 3장 엄격모드 ----------------//

"use strict"; //이 코드는 모던한 방식으로 실행된다 //

//"use strict"는 반드시 최상단에 위치할 것. //
//"use strict"를 취소하는 방법 X, "no use strict"같은 지시자도 존재X//


//"use strict"를 사용하는 방법//
//브라우저 콘솔에는 기본적으로 use strict 같은 경우 



//---------------- 4장 변수와 상수 ----------------//
// 변수의 종류 : var , const , let //
// 변수(variable) : 데이터를 저장할때 쓰이는 이름이 붙은 저장소.

// - let 변수 - //
let message

message = "hello world!";

alert(message);

// 아래의 예문처럼 변수는 선언과 값 할당을 한줄에 작성할 수도 있다. //

let letter = "hi computer!";

alert(letter);

// 한 줄에 여러 변수를 선언하는 것도 가능하지만 권장하는 방법이 아니므로 한줄에는 하나의 변수만을 작성할 것. //

let person = "heeyeon", age = "27", gender = "female";

alert(person);


// ※ let 대신 var //
// 만들어진지 오래된 스크립트에서는 let 대신 var라는 키워드를 발견하는 경우가 있다.//
// var는 let과 거의 동일하게 동작하고 var도 let 처럼 변수를 선언하는데 쓰인다. 다만 var는 오래된 방식이다.//


// ※ 현실 속의 비유 //
// "상자" 안에 데이터를 저장하는데 이 상자에 특별한 이름표가 붙어있다. 이 이름표가 변수//
// 이 상자 안에 "Hello computer?" 값을 저장하는 것이라고 생각할 수 있다. //
// 상자 속에는 어떤 값이든지 넣을 수 있고, 원하는 만큼 값을 변경할 수 있다. //
// 값이 변경되면 이전 값은 변수에서 제거된다. //

//변수를 두개를 선언하고 한 변수의 데이터를 다른 변수에게 복사할 수 있다.//

let talk;

talk = "Hello computer?"

talk ="Hi desktop?" //이제 값은 변경되었고 아전 값은 사라졌다.

alert(talk);

// 2개의 변수를 선언하고 한 변수의 데이터를 다른 변수에 복사 할 수 도 있다.

let hello = "hello world!";

//hello의 "hello world!" 값을 talk에 복사

talk = hello;

// 두 변수는 같은 데이터 값을 같는다

alert(hello);
alert(talk);

// 주의사항 : 변수를 2번 선언하면 에러가 발생한다. 변수는 오직 1번만 선언해야한다.
// 변수명에는 오직 문자, 숫자, 그리고 기호로는 $와 _만 들어갈 수 있다.
// 첫 글자는 숫자가 될 수 없다. 올바른 예시 : let userName(카멜표기법); / let test123;
// $기호와 _은 일반글자 처럼 특별한 의미를 지니지 않는다.

// let $ = 1 >> "$"라는 이름의 변수를 선언
// let _ = 2 >> "_"라는 이름의 변수를 선언

// alert($ + _); 3

let $ = 1;
let _ = 10;

alert($ + _);

// 잘못된 변수명 : let 1a > 변수명은 숫자로 시작해선 안된다 / let my-name; > 하이픈"-"은 변수명에 줄 수 없다.

// 같은 단어여도 "apple"와 "AppLE"는 서로 다른 변수로 취급한다.
// 키릴문자, 상형문자도 변수명으로 사용할 수 있지만 권장X

// 예약어 ex) let, class, return, function 역시 변수명으로 사용할 수 없다.


// - const 상수 - //

//변화하지 않는 변수를 선언할 경우 let 대신 const를 사용한다.

const myBloodType = "B";

//상수는 재할당 할 수 없으므로 상수를 변경할려고 하면 에러가 발생한다.

// myBloodType = "A"; << error!
// 변수값이 절대 변경되지 않을 것이라고 확신하면 꼭 const를 사용하도록 하자.

// ※ 대문자 상수 : 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것, 밑줄로 구성된 이름으로 명명

const COLOR_RED = "#f00";
const COLOR_GREEN = "#0f0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#ff7f00";

// 색상을 고르고 싶은 경우 별칭을 사용하게 되었다!

let color = "COLOR_RED";
alert(color);



// ★ 요약 ★ //
// var, let, const를 사용해 변수를 선언할 수 있다. 선언된 변수에는 데이터를 저장한다
// let - 모던한 변수선언 키워드
// var - 오래된 변수선언 키워드, 사용빈도가 낮다.
// const - let과 비슷하지만 변수의 값을 변경할 수 없다.

// 사용 순위는 1. const 2.let 3.var(이건 아예 사용하지 말것)



// 과제 01 //

let admin, Name; //변수 2개를 동시에 선언할 수 있다.

Name = "john";

admin = Name;

alert(admin);

// 과제 02 //

let planet = "mars"; 

let currentUserName = "lisa";

// 과제 03 //

const Birthday = "21.01.1995"; // 대문자 상수는 '하드 코딩한' 값의 별칭을 만들때 주로 사용, birthday는 대문자 상수로 적합


