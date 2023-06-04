// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let somma = 0
function checkArray() {
  let numeriRandom = []
  for (let i = 0; i < 10; i++) {
    let Random = Math.round(Math.random() * 10)
    numeriRandom.push(Random)
  }
  for (let i = 0; i < numeriRandom.length; i++) {
    if (numeriRandom[i] > 5) {
      somma += numeriRandom[i]
      console.log(numeriRandom[i], "è maggiore di 5")
    } else {
      console.log(numeriRandom[i], "non è maggiore di 5")
    }
  }
  console.log(somma, "totale")
  console.log(numeriRandom)
}

checkArray()
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  {
    name1: "birra",
    price: 1,
    id: 1,
    quantity: 2,
  },
  {
    name1: "pane",
    price: 5,
    id: 1,
    quantity: 7,
  },
  {
    name1: "salame",
    price: 2,
    id: 1,
    quantity: 1,
  },
]
let shoppingCartTotalPrice = 0
function shoppingCartTotal() {
  for (let i = 0; i < shoppingCart.length; i++) {
    shoppingCartTotalPrice =
      shoppingCartTotalPrice + shoppingCart[i].price * shoppingCart[i].quantity
  }
}
shoppingCartTotal()
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
// Array per il carrello degli acquisti

// Definizione della funzione "addToShoppingCart"
function addToShoppingCart(newItem) {
  shoppingCart.push(newItem)
  return shoppingCart
}

const newItem = {
  name1: "pasta",
  price: 3,
  id: 1,
  quantity: 1,
}
shoppingCart = addToShoppingCart(newItem)
console.log(shoppingCart)
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(cart) {
  let maxItem = cart[0]

  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > maxItem.price) {
      maxItem = cart[i]
    }
  }

  return maxItem
}
const maxItem = maxShoppingCart(shoppingCart)
console.log(maxItem)
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
function latestShoppingCart() {
  return shoppingCart[shoppingCart.length - 1]
}
console.log(latestShoppingCart())
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
function loopUntil(x) {
  let count = 0

  {
    const randomNum = Math.floor(Math.random() * 10)

    if (randomNum < x && x < 10) {
      while (count < 3) {
        const randomNum = Math.floor(Math.random() * 10)
        console.log(randomNum)

        if (randomNum > x) {
          count++
        }
      }
    }
  }
}

loopUntil(5)
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
function average() {
  let somma = 0
  let media
  for (let i = 0; i < arguments.length; i++) {
    somma = somma + arguments[i]
    media = somma / arguments.length
  }
  return media
}
console.log(average(7, 5, 5, 7), "media")
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest() {
  let word = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > word.length) {
      word = arguments[i]
    }
  }
  return word
}

console.log(longest("ciao", "buongiorno", "patata"))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
function isEmailSpam(emailContent) {
  const spamKeywords = ["SPAM", "SCAM"]

  for (let i = 0; i < spamKeywords.length; i++) {
    if (
      emailContent.toLowerCase().includes(spamKeywords[i]) ||
      emailContent.toUpperCase().includes(spamKeywords[i])
    ) {
      return true
    }
  }

  return false
}

console.log(isEmailSpam("SPAm"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
function newDate(data) {
  const today = new Date().getTime()
  const dataInserita = new Date(data).getTime()
  const difference = today - dataInserita
  let dayDifference = Math.floor(difference / (1000 * 60 * 60 * 24))

  return dayDifference
}

console.log(newDate("2023-06-03"))
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
function matrixGenerator(x, y) {
  let matrix = []

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      let value = i.toString() + j.toString()
      matrix.push(value)
    }
  }

  return matrix
}

console.log(matrixGenerator(3, 2))
