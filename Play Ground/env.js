

class Spaceship
{
    start()
    {
        console.log("Parent Method");
    }
}

class Rocket extends Spaceship
{
    start()
    {
        // super();
        console.log("Child Method");
    }
}

let par = new Spaceship();
let child = new Rocket();