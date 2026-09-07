

class Spaceship
{
    start()
    {
        console.log("Engine started");
    }
}

class Rocket extends Spaceship
{
    start()
    {
        console.log("Rocket started");
    }
}

let objs = new Spaceship();
let objr = new Rocket();