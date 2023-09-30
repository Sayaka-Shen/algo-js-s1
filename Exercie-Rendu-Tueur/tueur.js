const nameCharacter = [
    "Louis",
    "Jean",
    "Deborah",
    "Pedro",
    "Alice",
    "Sabrina"
]

const characteristic = [
    "Nerd",
    "Sportif",
    "Blonde",
    "Lent",
    "Bienveillant",
    "Beau",
    "Attentif",
    "Efficace",
    "Rigoureux",
    "Sensible",
    "Minutieux",
    "Proactif",
]

class Killer {
    constructor(name, pv) {
        this.name = name
        this.pv = pv
    }
}

class Survivors {
    constructor(name, deathProb, dmgProb, dmgDeathProb, characteristic) {
        this.name = name
        this.deathProb = deathProb
        this.dmgProb = dmgProb
        this.dmgDeathProb = dmgDeathProb
        this.characteristic = characteristic
    }
}

const Survivor = [
    new Survivors(
        nameCharacter[Math.floor(Math.random() * nameCharacter.length)], 
        0.4, 
        0.6, 
        0.1, 
        characteristic[Math.floor(Math.random() * characteristic.length)]
    ),

    new Survivors(
        nameCharacter[Math.floor(Math.random() * nameCharacter.length)], 
        0.4, 
        0.6, 
        0.1, 
        characteristic[Math.floor(Math.random() * characteristic.length)]
    ),

    new Survivors(
        nameCharacter[Math.floor(Math.random() * nameCharacter.length)], 
        0.4, 
        0.6, 
        0.1, 
        characteristic[Math.floor(Math.random() * characteristic.length)]
    ),

    new Survivors(
        nameCharacter[Math.floor(Math.random() * nameCharacter.length)], 
        0.4, 
        0.6, 
        0.1, 
        characteristic[Math.floor(Math.random() * characteristic.length)]
    ),

    new Survivors (
        nameCharacter[Math.floor(Math.random() * nameCharacter.length)], 
        0.4, 
        0.6, 
        0.1, 
        characteristic[Math.floor(Math.random() * characteristic.length)]
    )
]

let jason = new Killer("Jason", 100)

while(jason.pv >= 0) {
    
}
