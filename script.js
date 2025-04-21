//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		 this._age=age;
	}

	

	get Name(){
		return this._name;
	}
	get Age(){
		return this._age;
	}
	set Name(newName){
		this._name=newName;
	}
	set Age(newAge){
		this._age=newAge;
	}
}

class Student extends Person {

	constructor(name,age){
		super(name,age);
	}
	study(){
       const data=super().getName();
		console.log(data+" is studying");
	}
	
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}

	teach(){
		const d=getName();
	  console.log(d+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
