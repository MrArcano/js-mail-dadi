const ul = document.querySelector(".container ul");
const btnCeck = document.getElementById("btn_check");
const btnDice = document.getElementById("btn_dice");
const resultBtn = document.getElementById("result-btn");
const resultDice = document.getElementById("result-dice");
const boxFirst = document.getElementById("box-cpu-first");
const boxSecond = document.getElementById("box-cpu-second");


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
    resultBtn.classList.add("bg-success");
    resultBtn.classList.remove("bg-danger");
  }else{
    text = "L'email inserita NON si trova in elenco";
    resultBtn.classList.add("bg-danger");
    resultBtn.classList.remove("bg-success");
  }
  resultBtn.classList.add("py-3");
  resultBtn.innerHTML = text;
});
// -------------------------------------------------
btnDice.addEventListener("click",function(){

  boxFirst.innerHTML="";
  boxSecond.innerHTML="";
  

  const firstNumRnd = Math.ceil(Math.random() * 6);
  const secondNumRnd = Math.ceil(Math.random() * 6);

  // --------------------------------------------------------

  const firstDice = document.createElement("div");
  firstDice.className = "dice d-flex justify-content-center align-items-center";
  firstDice.append(firstNumRnd);
  boxFirst.append(firstDice);

  // --------------------------------------------------------

  const secondDice = document.createElement("div");
  secondDice.className = "dice d-flex justify-content-center align-items-center";
  secondDice.append(secondNumRnd);
  boxSecond.append(secondDice);

  // --------------------------------------------------------
  
  let text = "";

  if (firstNumRnd > secondNumRnd){
    text = "Il primo numero vince";
  }else
  if (firstNumRnd < secondNumRnd){
    text = "Il secondo numero vince";
  }else{
    text = "Sono uguali";
  }

  resultDice.classList.add("py-3");
  resultDice.innerHTML = text;
});




