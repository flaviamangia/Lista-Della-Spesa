let prompt = require("prompt-sync")();
//Programma diviso in 2 versioni che permette la gestione di una lista della spesa.
//Progetto a cura di: Cafaro Mario, Cusenza Giovanni Paolo, Gurgoglione Samuele, Mangiacotti Flavia.

//Versione 1 - Base
//  - Aggiunta e rimozione di elementi dalla lista della spesa.
//  - Visualizzazione della lista.

let listaSpesa = [];

function aggiungi(prodotto) 
{
  listaSpesa.push(prodotto);
}

function rimuovi(prodotto) 
{
  let posizione = listaSpesa.indexOf(prodotto);
  if (posizione!==-1) 
  {
    listaSpesa.splice(posizione, 1);
  }
}

function visualizza()
{
  console.log("Lista della spesa:");
  listaSpesa.forEach((prodotto, posizione) => { console.log(posizione+1+" - "+prodotto);});
}

function main() 
{
    let comando;
    do
    {
      comando = prompt("Inserisci un comando (aggiungi, rimuovi, visualizza, termina): ");
      comando = comando.toLowerCase();
      let prodotto="";
      if(comando=="aggiungi")
      {
        prodotto = prompt("Inserisci il nuovo prodotto: ");
        aggiungi(prodotto);
        console.log(prodotto+" è stato aggiunto alla lista con successo.");
      }
      else if(comando=="rimuovi")
      {
        prodotto = prompt("Inserisci il prodotto da rimuovere: ");
        if(listaSpesa.includes(prodotto)==true)
        {
            rimuovi(prodotto);
            console.log(prodotto+" è stato rimosso dalla lista con successo.");
        }
        else
        console.log(prodotto+" assente nella lista.");
      }
      else if(comando=="visualizza")
        visualizza();
      else if(comando!="termina")
        console.log("Comando non valido.");
    }
    while(comando!="termina")
    console.log("Programma terminato");
}

main();