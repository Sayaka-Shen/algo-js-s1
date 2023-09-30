let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    if (countCharacter(user) < 5) {
        console.log("ce n'est pas du tout un prénom long.")
    } else {
        console.log("c'est un prénom long de plus de 5 lettres.")
    }
});





