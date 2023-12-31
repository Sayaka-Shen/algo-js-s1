class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.random() < this.luck;
  }

  attackPokemon(pokemon) {
    // pas obligatoire === true
    if (this.isLucky() === true) {
      const dmg = this.attack - pokemon.defense;
      pokemon.hp -= dmg;
      console.log(this.name + " a attaqué " + pokemon.name + " pour " + dmg + " dégats. Il lui reste " + pokemon.hp + ".")
    } else {
      console.log(this.name + " a raté son attaque.")
    }

  }
}

const pikachu = new Pokemon("Pikachu", 20, 15, 90, 0.3);
const evoli = new Pokemon("Evoli", 25, 12, 70, 0.4)

while (pikachu.hp > 0 && evoli.hp > 0) {
  pikachu.attackPokemon(evoli);

  if (evoli.hp <= 0) {
    console.log(evoli.name + " est mort.");

    break;
  }

  evoli.attackPokemon(pikachu);

  if (pikachu.hp <= 0) {
    console.log(pikachu.name + " est mort.");

    break;
  }
}