
let numerotentavivas = 10;
const numeroSecreto =Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);


 function shownumber(){
const calcular =parseInt(document.getElementById("calcular").value);

  if(calcular < 1 || calcular > 100){
    document.getElementById("resultado").innerText = "Numero invalido, Tente outro";
    return;
}

    if (numerotentavivas >= 1){
     numerotentavivas--;
    document.getElementById("tentativas").innerText = "Chances restantes :" + numerotentavivas;
  }else{
    document.getElementById("tentativas").innerText = "Sem chances, Voce perdeu o numero secreto era : " + numeroSecreto;
    return;
 }
 if (isNaN(calcular)) {
    document.getElementById("resultado").innerText = "Por favor, insira um número válido!";
    return;
 }

  if (calcular == numeroSecreto){
    document.getElementById("resultado").innerText = "Voce acertou, a resposta era :" + numeroSecreto;
    return;
  }
   else if (calcular < numeroSecreto){
    document.getElementById("resultado").innerText = "Voce errou, o numero e maior que o Resultado.";
    return;
   }
   else{
   document.getElementById("resultado").innerText = "Voce errou, o numero e menor que o Resultado.";
   return;
}
}