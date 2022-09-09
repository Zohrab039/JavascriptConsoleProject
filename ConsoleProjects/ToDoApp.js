let prompt = require('prompt-sync')();

// Manual ilə əvvəlcə sistemdə etmək isdəyimiz əməliyyatları ekranda göstəririk
let manual = `
1. Press 1 to add To Do.
2. Press 2 to show all To Do's.
3. Press 3 to exit the system.
`

while(true){
    let input = prompt('Please choose an order: ');
    if(input == '1'){
        console.log('New Task added successfully!');
    }else if(input == '2'){
        console.log('All tasks');
    }else if(input == '3'){
        console.log('Logged out');
    }else{
        console.log('Wrong order selected!');
    }
}

console.log(manual);