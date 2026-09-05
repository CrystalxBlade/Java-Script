

const player = 
{
    name : "Blade",
    attack : 60,
    mana : 40,
    damage : 20,

    info: function()
    {
        console.log("Name = ", this.name);
    },
};

console.log(player.info())