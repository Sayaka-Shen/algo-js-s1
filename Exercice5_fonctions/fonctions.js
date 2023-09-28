const a = "Jean";
const b = "Paul";
let result;

function checkName(a, b) {
  if (a === b) {
    result = "Les noms sont identiques";
  } else {
    result = "Les noms sont différents";
  }

  console.log(result);
}

checkName(a, b);