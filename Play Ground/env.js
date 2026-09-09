

class Spaceship
{
    constructor()
    {
        this.species = "Aliens in UFO"
    }

    start()
    {
        console.log("Parent Method");
    }
}

class Rocket extends Spaceship
{
    constructor(name)
    {
        super();
        this.name = name;
    }

    start()
    {
        console.log("Child Method");
    }
}

let child = new Rocket("Humans");
 

