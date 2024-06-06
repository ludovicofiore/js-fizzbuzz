// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// scrivere ciclo con numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // aggiungere al ciclo le condizioni con if etc.

    // per multipli di 3 e di 5 scrivo FizzBuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        let fizzbuzz = "FizzBuzz";
       
        console.log(fizzbuzz);

        // per multipli di 5 scrivo buzz
    } else if (i % 5 === 0) {
        let buzz = "Buzz";

        console.log(buzz);

        // per multipli di 3 scrivo fizz
    } else if (i % 3 === 0) {
        let fizz = "Fizz";

        console.log(fizz);

        // altrimenti numero normale
    } else {
        console.log(i);
    }
    
}


