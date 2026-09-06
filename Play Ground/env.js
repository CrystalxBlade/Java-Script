

class spaceShip
{
    constructor()
    {
        console.log("spaceShip constructor");
    }

    start()
    {
        console.log("Engine is on");
    }

    stop()
    {
        console.log("Engine is off");
    }

    ufo()
    {
        console.log("UFO in Space");
    }

    setName(name)
    {
        this.setName = name;
    }
}

let rocket =  new spaceShip();
rocket.start();
rocket.stop();

let UFO = new spaceShip();
UFO.ufo();
UFO.setName("skyNet");
