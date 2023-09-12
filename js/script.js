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

console.log(emailArray);

const emailUser = prompt("Inserisci la tua email:");

console.log(emailUser);

let checkFlag = false;
// for
for(let i = 0; i < emailArray.length; i++){
  if(emailArray[i] === emailUser){
    checkFlag = true;
  }
}
// end for

if (checkFlag){
  console.log("L'email inserita si trova in elenco puoi entrare");
}

