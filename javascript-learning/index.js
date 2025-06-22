// const name = "John";
// let age = 30;

const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        console.log('Hello ' + this.name, this.age + ' years old');
    }
}
person.sayHello();

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);