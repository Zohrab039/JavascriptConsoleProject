let prompt = require('prompt-sync')();

// Manual ilə əvvəlcə sistemdə etmək isdəyimiz əməliyyatları ekranda göstəririk
let manual = `
1. Press 1 to add To Do.
2. Press 2 to show all To Do's.
3. Press 3 to exit the system.
`

let allTasks = [];

class Tasks {
    constructor(taskSubject, taskReminder){
        this.taskSubject = taskSubject;
        this.taskReminder = taskReminder;
    }
    showTasksDetails(){
        console.log(`Task subject: ${this.taskSubject}, Task date: ${this.taskReminder}`);
    }
}

function addNewTask(){
    let taskSubject = prompt('Enter task subject: ');
    let taskReminder = prompt('Enter task reminder date: ');
    let task = new Tasks(taskSubject, taskReminder);
    allTasks.push(task);
}

function showTasks(){
    for(task of allTasks){
        task.showTasksDetails();
    }
}

console.log(manual);

while(true){
    let input = prompt('Please choose an order: ');
    if(input == '1'){
        addNewTask();
    }else if(input == '2'){
        showTasks();
    }else if(input == '3'){
        console.log('Logged out');
        break;
    }else{
        console.log('Wrong order selected!');
    }
}
