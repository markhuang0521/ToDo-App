// set up class with constructor

class Person {
	constructor(name, age = 0) {
		this.name = name;
		this.age = age;
	}
	describe() {
		return ` HI MY name is ${this.name} and I am ${this.age} years old`;
	}
}

class Student extends Person {
	constructor(name, age = 0, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	describe() {
		let describe = super.describe();
		if (this.major) {
			describe += ` and major in ${this.major}`;
		}
		return describe;
	}
}

class Traveler extends Person {
	constructor(name, age, home) {
		super(name, age);
		this.home = home;
	}
	hasHome() {
		return !!this.home;
	}
	describe() {
		let describe = super.describe();
		if (this.home) {
			describe += ` from ${this.home}`;
		}
		return describe;
	}
}

const me = new Person("MIng", 21);
const my = new Student("Mark", 21, "CS");
const ming = new Traveler("Xiao", 21);

// console.log(me.describe());
// console.log(my.describe());
// console.log(ming.describe());
console.log(ming.describe());


const name=JSON.stringify({name:'mark'});
localStorage.setItem('name','mark')
JSON.parse(name)


localStorage.getItem('count')
const one=localStorage.getItem("count", );
parseInt(localStorage.getItem('count'),10)

