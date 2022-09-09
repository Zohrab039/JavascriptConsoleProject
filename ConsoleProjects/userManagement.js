let prompt = require('prompt-sync')();

let manual = `
1. Sistemə daxil olmaq üçün 1 düyməsinə basın.
2. Bütün istifadəçilərin məlumatlarını görmək üçün 2 düyməsinə basın.
2. Sistemdən çıxmaq üçün 3 düyməsinə basın.
`

let users = [];
class User  {
    constructor(name, surname, age, email, password){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    showUserDetails(){
        console.log(`Ad: ${this.name}, Soyad: ${this.surname}, Yaş: ${this.age}, Email: ${this.email}`);
    }
}

function registerUser(){
    let name = prompt("Adınızı daxil edin: ");
    let surname = prompt('Soyadınızı daxil edin: ');
    let age = prompt('Yaşınızı daxil edin: ');
    let email = prompt('Emailini daxil edin: ');
    let password = prompt('Şifrənizi daxil edin: ');
    let user = new User(name, surname, age, email, password);
    users.push(user);
}

function showUsers(){
    for(user of users){
        user.showUserDetails();
    }
}

console.log(manual);

while(true){
    let input = prompt('Zəhmət olmasa əmr daxil edin: ');
    if(input == '1'){
        registerUser();
    }else if(input == '2'){
        showUsers();
    }else if(input == '3'){
        console.log('Sistemdən çıxıldı');
        break;
    }else{
        console.log('Səhv əməliyyat seçildi');
    }
}