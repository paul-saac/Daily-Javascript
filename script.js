function Person(name, age) {
		this.name = name;
		this.age = age;
		this.greet = function() {
				console.log("Hi, I'm " + this.name);
		};
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

person1.greet(); // Output: Hi, I'm Alice
person2.greet(); // Output: Hi, I'm Bob