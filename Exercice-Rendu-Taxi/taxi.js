let  playlist = [
    "Anissa - Wejdene", 
    "Crazy Frog - Axel F", 
    "Copine - Aya Nakamura", 
    "Eyes Of The Tiger - Survivor", 
    "Aya Nakamura - Djadja", 
]


class Character {
    constructor(name, pv) {
        this.name = name
        this.pv = pv
    }

    traject(playlist) {
        let redLight = 30;
        let changeTaxi = 0;

        while(redLight >= 0 && this.pv > 0) {
            let randomMusic = playlist[Math.floor(Math.random() * playlist.length)]
            redLight--

            if(randomMusic === "Anissa - Wejdene") {
                changeTaxi++
                this.pv--

                console.log("La musique de Wejdene est passé, il reste à John " + this.pv + " de PV. Il lui reste " + redLight + " feux rouges.")
            } else {
                console.log("La musique est " + randomMusic + ". Il lui reste " + redLight + " feux rouges.")
            }

            if(this.pv <= 0) {
                console.log("John a explosé. Il a changé " + changeTaxi + " fois de Taxi. Il a passé " + redLight + " feux rouges.")
                break;
            } 

            if(redLight === 0) {
                console.log("John est arrivé chez lui, il a passé tous les feux rouges. Il lui reste " + this.pv + " de PV.")
                break
            }
        }
    }
}

let john = new Character("John", 10)
john.traject(playlist);
