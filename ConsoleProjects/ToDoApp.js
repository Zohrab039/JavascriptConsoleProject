let prompt = require('prompt-sync')();

// Manual ilə əvvəlcə sistemdə etmək isdəyimiz əməliyyatları ekranda göstəririk
let manual = `
1. Press 1 to enter the system.
2. Press 2 to show all To Do's.
3. Press 3 to add To Do.
3. Press 4 to exit the system.
`

let allToDo = [];
class ToDo{
    constructor(subtask, reminderTime){
        this.subtask = subtask;
        this.reminderTime = reminderTime;
    }
    showToDoDetails(){
        console.log(`Subtask Title: ${this.subtask}, Reminder Time: ${this.reminderTime}`);
    }
}

function showAllToDo(){
    let subtask = prompt('Enter a subtask: ');
    let reminderTime = prompt('Enter a valid date: ');
    let newToDo = new ToDo(subtask, reminderTime);
    allToDo.push()
}

console.log(manual);


// Göstərilən əməliyyatların console-da çağırıldıqdan sonra avtomatik olaraq bağlanmaması üçün while loop-undan istifadə edirik
while(true){ // While(true) yazaraq əməliyyatların sonsuza qədər davam etməsinə imkan veririk
    let input = prompt('Please insert an order: ')
    if(input == '1'){
        let username = prompt('Enter Username: ')
        let password = prompt('Enter password: ')
        if(username == 'admin' && password == 'admin'){
            console.log('You logged in');
        }else{
            console.log('Username or password is incorrect!');
        }
    }else if(input == '2'){
        showAllToDo();
    }else if(input == '3'){
        console.log('Added To Do');
    }else if(input == '4'){
        console.log('Logged out');
        break; // Sistemdən çıxış etdikdə sistemin bağlanması üçün və yenidən əmr istəməməsi üçün break-dan istifadə etdim.
    }else{
        console.log('Wrong order!');
    }
}
