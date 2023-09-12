// MAIL
// -------------------------------------------------
const emailArray = [
  "ciao@ciao.it",
  "ciao1@ciao.it",
  "ciao2@ciao.it",
  "ciao3@ciao.it",
  "ciao4@ciao.it",
  "ciao5@ciao.it",
  "ciao6@ciao.it",
  "ciao7@ciao.it",
]

const emailUser = prompt("Inserisci la tua email:");
let checkFlag = false;

// for
for(let i = 0; i < emailArray.length; i++){
  if(emailArray[i] === emailUser){
    checkFlag = true;
  }
}
// end for
console.log("Mail in elenco...");
console.log(emailArray);
console.log(emailUser);
if (checkFlag){
  console.log("L'email inserita si trova in elenco puoi entrare");
} 
// -------------------------------------------------
console.log("-----------------");
console.log("Gioco dei dadi...");

const firstNumRnd = Math.ceil(Math.random() * 6);
const secondNumRnd = Math.ceil(Math.random() * 6);

console.log("n1: " + firstNumRnd);
console.log("n2: " + secondNumRnd);


if (firstNumRnd == secondNumRnd){
  console.log("Sono uguali");
}else
if (firstNumRnd > secondNumRnd){
  console.log("Il primo numero vince");
}else{
  console.log("Il secondo numero vince");
}


