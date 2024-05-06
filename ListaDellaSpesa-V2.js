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

//Versione 2 - Avanzata
// - Filtraggio e ordinamento degli elementi.
// - Ricerca di un elemento nella lista della spesa.

function filtra(criterio) 
{
  let listaFiltrata = listaSpesa.filter(prodotto => prodotto.toLowerCase().includes(criterio.toLowerCase()) );
  return listaFiltrata;
}

function ordina() 
{
  return listaSpesa.sort();
}

function cerca(prodotto) 
{
  let posizione = listaSpesa.indexOf(prodotto);
  if (posizione!==-1)
  {
    return "L'elemento "+prodotto+" si trova nella posizione "+(posizione+1)+" della lista.";
  }
  else  
    return "L'elemento "+prodotto+" NON è presente nella lista della spesa.";
}

function main() 
{
    let comando;
    do
    {
      comando = prompt("Inserisci un comando (aggiungi, rimuovi, visualizza, filtra, ordina, cerca, termina): ");
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
        rimuovi(prodotto);
        console.log(prodotto+" è stato rimosso dalla lista con successo.");
      }
      else if(comando=="visualizza")
        visualizza();
      else if(comando=="filtra")
      {
        let criterio = prompt("Inserisci una parola chiave per filtrare la lista: ");
        console.log("Lista filtrata:", filtra(criterio));
      }
      else if(comando=="ordina")
        console.log("Lista ordinata:", ordina());
      else if(comando=="cerca")
      {
        prodotto= prompt("Inserisci il prodotto da cercare: ");
        console.log(cerca(prodotto));
      }
      else if(comando!="termina")
        console.log("Comando non valido.");
    }
    while(comando!="termina")
    console.log("Programma terminato");
}

main();

