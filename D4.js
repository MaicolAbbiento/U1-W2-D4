/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, n2) e calcola l'area del rettangolo associato..
*/

function area(n1, n2) {
  let rectangle = n1 * n2
  console.log(rectangle)
}
area(3, 4)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  let sum
  if (n1 === n2) {
    sum = (n1 + n2) * 3
  } else {
    sum = n1 + n2
  }
  console.log(sum)
}
crazySum(12, 11)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  let dif
  if (n1 > 19) {
    dif = (n1 - 19) * 3
  } else {
    dif = 19 - n1
  }
  console.log(dif)
}
crazyDiff(21)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n1) {
  if (n1 === 400 || (20 < n1 && n1 < 100)) {
    return true
  } else {
    return false
  }
}
console.log(boundary(4))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.includes("EPICODE")) {
    console.log(string)
  } else {
    const epicstring = "EPICODE "
    string = epicstring.concat(string)
    console.log(string)
  }
}
epify(" CIAO")
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n1) {
  if (n1 >= 0) {
    if (n1 % 3 === 0 || n1 % 7 === 0) {
      console.log("is this number divisible for 3 or 7 ", true)
    } else {
      console.log("is this number divisible for 3 or 7 ", false)
    }
  } else {
    console.log("errore si prega di mettere un numero positivo")
  }
}
check3and7(8)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  return str.split("").reverse().join("")
}
let stringaInvertita
stringaInvertita = reverseString("hello")
console.log(stringaInvertita)
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(string) {
  let parole = string.split(" ")
  let risultato = ""
  for (let i = 0; i < parole.length; i++) {
    risultato += parole[i].charAt(0).toUpperCase() + parole[i].slice(1) + " "
  }

  return risultato
}

console.log(upperFirst("buona sera sono maicol"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutsString(string) {
  let stringCut = string.slice(1, string.length - 1)
  console.log(stringCut)
}
cutsString("ciao sono")
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n1) {
  let numeriRandom = []
  for (let i = 0; i < n1; i++) {
    let Random = Math.round(Math.random() * 10)
    numeriRandom.push(Random)
  }
  console.log(numeriRandom)
}
giveMeRandom(3)
