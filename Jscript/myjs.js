var bigliettoScontato;

//chilometri che vuole percorrere
var kmDaPercorrere = parseInt(prompt ("Per iniziare il viaggio dovrai dirmi quanti km dobbiamo percorrere:"), 10);
console.log(kmDaPercorrere);
if (isNaN(kmDaPercorrere)) {
 kmDaPercorrere = parseInt(prompt ("Il dato inserito non è valido, riprovare:"), 10);
}

// e l’età del passeggero
var etaCliente = parseInt(prompt ("Inseriamo la tua età:" ), 10);
if (isNaN(etaCliente)) {
 etaCliente = parseInt(prompt ("Il dato inserito non è valido, riprovare:"), 10);
}

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var costoBiglietto = kmDaPercorrere * 0.21;


if (etaCliente < 18) {
  // a applicato uno sconto del 20% per i minorenni
  bigliettoScontato = ((costoBiglietto * 80)/ 100);
  document.getElementById("scontato").innerHTML=("Ma vista la tua età il prezzo in realtà è: " + bigliettoScontato +"€")
}else if (etaCliente > 65) {
  //va applicato uno sconto del 40% per gli over 65
  bigliettoScontato = ((costoBiglietto * 60)/ 100);
  document.getElementById('scontato').innerHTML=("Ma vista la tua età il prezzo in realtà è: " + bigliettoScontato +"€")
}

document.getElementById('costo-biglietto').innerHTML=("Il costo del tuo biglietto è: " + costoBiglietto +"€")
