const ul = document.querySelector(".container ul");
const btnCeck = document.getElementById("btn_check");
const resultBtn = document.getElementById("result-btn");


// MAIL
// -------------------------------------------------
// creo un array delle mie email
const emailArray = [
  "pippo@gmail.com",
  "pluto@gmail.com",
  "paperone@gmail.com",
  "qui@gmail.com",
  "quo@gmail.com",
  "qua@gmail.com",
  "paperino@gmail.com",
  "paperina@gmail.com",
];

// Creo una ul>li con tutti gli elementi dell'array email 

for(let i = 0; i < emailArray.length; i++){
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.append(emailArray[i]);
  ul.append(li);
}

// evento click del pulsante verifica email
btnCeck.addEventListener("click",function(){

  const emailUser = document.getElementById("email-text").value;
 
  let checkFlag = false;
  let text="";

  // for
  for(let i = 0; i < emailArray.length; i++){
    if(emailArray[i] === emailUser){
      checkFlag = true;
      const liSpecial = document.querySelector("ul li:nth-child(" + (i + 1) +")");
      liSpecial.style = "text-decoration-line: line-through;"
      console.log(liSpecial);
    }
  }
  // end for

  if (checkFlag){
    text = "L'email inserita si trova in elenco puoi entrare";
  }else{
    text = "L'email inserita NON si trova in elenco";
  }

  resultBtn.innerHTML = text;
});
// -------------------------------------------------
console.log("-----------------");
console.log("Gioco dei dadi...");

const firstNumRnd = Math.ceil(Math.random() * 6);
const secondNumRnd = Math.ceil(Math.random() * 6);

console.log("n1: " + firstNumRnd);
console.log("n2: " + secondNumRnd);


if (firstNumRnd > secondNumRnd){
  console.log("Il primo numero vince");
}else
if (firstNumRnd < secondNumRnd){
  console.log("Il secondo numero vince");
}else{
  console.log("Sono uguali");
}


