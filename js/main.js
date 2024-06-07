// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// dichiaro variabile container
const container = document.querySelector(".container");

// scrivere ciclo con numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // creo un nuovo elemento
    let element = document.createElement("div");

    // aggiungere al ciclo le condizioni con if etc.

    // per multipli di 3 e di 5 scrivo FizzBuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        let fizzbuzz = "FizzBuzz";
       
        console.log(fizzbuzz);

        // creo una classe al div
        element.className ="fizzbuzz-class";

        // aggiungo contenuto a element
        element.append(fizzbuzz);


        // per multipli di 5 scrivo buzz
    } else if (i % 5 === 0) {
        let buzz = "Buzz";

        console.log(buzz);

        // creo una classe al div
        element.className ="buzz-class";

        // aggiungo contenuto a element
        element.append(buzz);


        // per multipli di 3 scrivo fizz
    } else if (i % 3 === 0) {
        let fizz = "Fizz";

        console.log(fizz);

        // creo una classe al div
        element.className ="fizz-class";

        // aggiungo contenuto a element
        element.append(fizz);


        // altrimenti numero normale
    } else {
        console.log(i);

        // aggiungo contenuto a element
        element.append(i);

    }

    // porto il contenuto in pagina
    container.appendChild(element);
    
}


