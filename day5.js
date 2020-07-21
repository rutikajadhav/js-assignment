// Question 1 .........................................
console.log("Question 1");

let value = prompt("Enter the positive elements of array or enter -1 to exit.")
        var array = []
        while(value != -1){
            if(value > 0){
            array.push(value)
            }
            value = prompt("Enter next value or -1 to exit")
        }
        let odd = array.filter(el=>el%2!=0)
        console.log(odd)
        let cube = array.filter(el=>el%2!=0).map(el=>el**3);
        console.log(cube)

//Question 2 ............................................
console.log("Question 2");

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0; 
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends User {
    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }
    deletecoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }

}

class Admin extends Moderator {
    addcourse(User, course) {
        User.courses.push(course);
        console.log(`User has added ${course}`);
        console.log(User);
    }
    deletecourse(User, course) {
        User.courses = User.courses.filter(courses=>courses!==course);
        console.log(`user has successfully deleted ${course}`);
        console.log(User);
    }
}

let User1 = new User('abc', 21, 'abc@gmail.com')
let User2 = new User('def', 22, 'def@gmail.com')
let mod = new Moderator('ghi',23,'ghi@gmail.com')
let admin = new Admin('jkl',24,'jkl@gmail.com')
let Users = [User1, User2,mod,admin];
User1.login()
User1.logout()
mod.addcoins(User1)
mod.deletecoins(User1)
admin.addcourse(User1,'Javascript')
admin.deletecourse(User1,'Javascript')

// Users.forEach(element =>{
//     console.log(element);
// })


//Question 3 ...................................................
console.log("Question 3");

async function fetchTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    }
    fetchTodos();
