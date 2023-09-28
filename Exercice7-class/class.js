class Pokemon {
    // Je crée une class Pokémon et on lui met des propriétés comme un nom, des points d'attaques...
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    // Création de la fonction qui va définir la luck du Pokémon
    isLucky() {
        // Math random va retourner un nombre entre 0 et 1 et on le compare à la luck du Pokémon
        // je retourne vrai ou faux en fonction de si le nombre random est inférieur à la luck du Pokemon
        return Math.random() < this.luck;
    }

    attackPokemon(pokemon) {
        // Je définis une variable damage
        // damage récupère les dégats effectués
        const dmg = this.attack - pokemon.defense;

        // J'utilise la fonction isLucky qui me retourne vrai ou faux
        // si c'est vrai on applique les damages sur le pokémon
        // sinon c'est raté et c'est pv ne change pas
        if(pokemon.isLucky()) {
            pokemon.hp -= dmg; 
        }

        return dmg;
    }
}

// Création des deux Pokémons
const Pikachu = new Pokemon("Pikachu", 20, 15, 90, 0.3);
const Evoli = new Pokemon("Evoli", 25, 12, 70, 0.4)

// Tant que les vies des deux pokémons sont supérieur de 0 je joue
while(Pikachu.hp > 0 && Evoli.hp > 0) {
    // Je crée une variable qui va récupérer les damage de ma fonction attackPokemon
    // Et du coup j'attaque Evoli
    const dmgToEvoli = Pikachu.attackPokemon(Evoli);

    // Ici j'affiche les dégats subit par Evoli et le nombre de PV qu'il lui reste
    console.log("Evoli a subi " + dmgToEvoli + ", il lui reste " + Evoli.hp + " de PV.");

    // Si Evoli meurt je déclare un message de mort et j'arrête le jeu
    if(Evoli.hp <= 0) {
        console.log("Evoli est mort");

        break;
    }

    // Même fonctionnement qu'au dessus pour ce Pokémon
    const dmgToPikachu = Evoli.attackPokemon(Pikachu);

    console.log("Pikachu a subi " + dmgToPikachu + ", il lui reste " + Pikachu.hp + " de PV.")

    if(Pikachu.hp <= 0) {
        console.log("Pikachu est mort");

        break;
    }
}