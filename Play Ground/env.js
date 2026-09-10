
let DATA = "Secret data";

class User
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("data = ", DATA);
    }
}

let student1 = new User("Blade", "Blade@gmail.com");
let student2 = new User("Crystal", "Crystal@gmail.com");