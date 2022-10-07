
//random number generator in a given range
function random(max, min){
    return Math.floor(Math.random() *(max - min) + min);

}

class Fighter {
    constructor(name){
        this.name = name,
        this.health = 10,
        //generating a random number for strength and defence arguments
        this.strength = random(10, 5), 
        this.defense = random(10, 5)

    }
    // attack method 
   attack(enemy) { 
         
        //  console.log(this)
        //  console.log( enemy)

             //the damage dealth should be the attackers strength - defenders defense
             //Math.abs() function returns the absolute value of a number
            let damage = Math.abs(this.strength - enemy.defense) 
            enemy.health -= damage
           
            if (enemy.health > 0) {  
               
                console.log(`${this.name} did ${damage} damage to ${enemy.name} who is left with ${enemy.health} health!`);
        } 
      
}
}

// creating my fighters
//do not pass in the already defined in the class constructor parameters: ex. 'this.strength' or 'this.defense' this will create an infinite loop that will take you hours to fix
const Kitana = new Fighter("Kitana")
const Frost = new Fighter("Frost")


//ASCII Text Art
console.log(`
    ███████╗██╗░██████╗░██╗░░██╗████████╗
    ██╔════╝██║██╔════╝░██║░░██║╚══██╔══╝
    █████╗░░██║██║░░██╗░███████║░░░██║░░░
    ██╔══╝░░██║██║░░╚██╗██╔══██║░░░██║░░░
    ██║░░░░░██║╚██████╔╝██║░░██║░░░██║░░░
    ╚═╝░░░░░╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░`)


 //---------- Game Logic   
//the game will run till kO === false
let kO = true;
// takeTurns will alternate between fighters
let takeTurns = true;

while(kO) {
    
    if(takeTurns){
        takeTurns = false
       Kitana.attack(Frost)
    }else {
        takeTurns = true
        Frost.attack(Kitana)
        
    }

    if (Kitana.health === 10 && Frost.health === 10) {
         console.log(`
         █ ▀█▀ ▀ █▀   ▄▀█   ▀█▀ █ █▀▀
         █ ░█░ ░ ▄█   █▀█   ░█░ █ ██▄`)
         kO = false;
    }

    if (Kitana.health <= 0) {
        
        console.log(`
        ██╗░░██╗░░░░█████╗░░░░
        ██║░██╔╝░░░██╔══██╗░░░
        █████═╝░░░░██║░░██║░░░
        ██╔═██╗░░░░██║░░██║░░░
        ██║░╚██╗██╗╚█████╔╝██╗
        ╚═╝░░╚═╝╚═╝░╚════╝░╚═╝`)
        console.log(`________ ${Frost.name} Wins! ________`)
        kO = false;
    }
     if (Frost.health <= 0) {
        
        console.log(`
        ██╗░░██╗░░░░█████╗░░░░
        ██║░██╔╝░░░██╔══██╗░░░
        █████═╝░░░░██║░░██║░░░
        ██╔═██╗░░░░██║░░██║░░░
        ██║░╚██╗██╗╚█████╔╝██╗
        ╚═╝░░╚═╝╚═╝░╚════╝░╚═╝`)
        console.log(`________ ${Kitana.name} Wins! ________`)
        kO = false;
     }
    
    // for jumping out of the infinite loop:  kO = false;
  
}