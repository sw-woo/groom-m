// 역 홑 따옴표(벡틱 문자열)로 문자열 기반 템플릿을 작성할 수 있습니다.
// 줄바꿈 가능합니다.
// 벡틱 문자열 안에 변수 추가 가능합니다.

const username = "우성우";
const age = 32;

let sample = `${username}은 ${age}살입니다.`;
console.log(`사용자정보 ${sample}`);

// 자바스크립트 객체 정의는 { 속성명: 속성값, 속성명2: 속성값, 기능명: 함수로 기능 정의() { } ... }
// 속성명과 변수명이 같으면 한 번만 사용 가능.
// 객체에 동적 속성 추가 가능.

const person = {
	// 객체의 속성 정의
	name: "우성우", // 속성명: 속성값
	age: 40, // 속성명: 속성값
	// 객체의 메서드 정의
	greet() {
		// 기능명: 함수 정의
		console.log(`안녕하세요 ${this.name} 입니다. 나이는 ${this.age}입니다. 직업은${this.job}`);
		// this.name과 this.age를 사용하여 객체의 속성에 접근
	},
};

// 객체 메서드 호출 예제
person.greet();

// 객체에 동적 속성 추가
person.job = "개발자";
person.greet(); // 객체의 함수 호출
console.log(person);

person.job = "node.js 개발자";
person.greet(); // 객체의 함수 호출

function traditionalFuction(a, b) {
	return a + b;
}

console.log(traditionalFuction(10, 20));

// IIFE (Immediately Invoked Function Expression) 바로 함수를 실행시킬때 사용합니다.

(function (a, b) {
	console.log(a + b);
})(2, 3);

// 콜백 함수로 사용
setTimeout(function () {
	console.log("Hello world");
}, 1000);

//화살표 함수는 ES6에서 도입된 기능으로, 함수 표현을 더 짧고 간결하게 만들어 줍니다. function 키워드 대신 화살표(=>)를 사용합니다.

const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(30, 20)); //50

//한줄 이상의 함수 본문이 필요한 경우
const complexArrowFuction = (a, b) => {
	const sum = a + b;
	return sum;
};

console.log(complexArrowFuction(15, 20)); //35

//화살표 함수 활용 화살표 함수도 콜백 함수로 사용할 수 있으며, 특히 this가 필요한 경우 유용합니다.
const myObject = {
	value: 42,
	logValue: function () {
		setTimeout(() => {
			console.log(this.value);
		}, 1000);
	},
};

myObject.logValue();
