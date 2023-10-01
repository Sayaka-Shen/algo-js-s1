class Character {
    constructor() {
        this.names = ["Louis", "John", "Amin", "Jean", "Gérard", "Alice", "Deborah", "Anaïs", "Eva", "Maria"];
        this.characteristics = ["Nerd", "Blonde", "Charo", "Tombeur", "Gros Beauf", "Roux", "Brutal", "Influençable", "Relou", "Vivant"]

        this.name = this.names[Math.floor(Math.random() * this.names.length)]
        this.characteristic = this.characteristics[Math.floor(Math.random() * this.characteristics.length)]
        this.damageProbability = Math.random() * (1 - 0.7) + 0.7
        this.deathProbability = Math.random() * (0.7 - 0) + 0
        this.damageWhileDyingProbability = Math.random() * (0.5 - 0) + 0
    }
}

class Killer {
    constructor() {
        this.name = "Jason"
        this.pv = 100
    }
}

let jason = new Killer();

let survivors = []
for (let i = 0; i < 5; i++) {
    let survivor = new Character()
    survivors.push(survivor)
}

while(jason.pv > 0 && survivors.length > 0) {
    survivors.forEach(survivor => {
        let randomNumber = Math.random()
        console.log(jason.name + " attaque " + survivor.name)

        if (randomNumber <= survivor.deathProbability) {
            if (randomNumber <= survivor.damageWhileDyingProbability) {
                jason.pv -= 15;
                survivors.splice(survivors.indexOf(survivor), 1);
                console.log(survivor.name + " a réussi à infliger 15 points de dégats à " + jason.name + " en mourant.");
            } else {
                survivors.splice(survivors.indexOf(survivor), 1);
                console.log(survivor.name + " s'est fait tué par " + jason.name + " sans lui infliger de dégats.");
            }
        } else if (survivor.damageProbability > survivor.deathProbability) {
            jason.pv -= 10;
            console.log(survivor.name + " a esquivé l'attaque et a infligé 10 points de dégats à " + jason.name);
        }
    });
    

    if(jason.pv <= 0) {
        console.log("Le tueur est mort")
        break;
    }

    if(survivors.length <= 0) {
        console.log("Les survivants sont mort")
        break;
    }
}


/* 
    J'ai essayé de plein de manières, j'ai recommencé plusieurs fois et j'ai réussi à en trouver une qui me convenait. Je pense 
    que ça peut être encore optimisé mais c'est fonctionnel. Il y a peut-être quelques erreurs.
    J'ai eu quelques problèmes avec le fait de devoir utiliser 3 probabilités.
*/