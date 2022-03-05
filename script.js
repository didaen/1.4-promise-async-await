let ditepati = true;
janji1 = new Promise((resolve, reject) => {
    if( ditepati ) {
        resolve('Janji ditepati.');
    } else {
        reject('Janji diingkari');
    }
});

console.log(janji1);

janji1
    .then( response => console.log('OK : '+ response) )
    .catch( response => console.log('NOT OK : ' + response) );

janji2 = new Promise( resolve => {
    setTimeout(() => {
        resolve('Janji kedua ditepati');
    }, 2000);
});

// TIDAK BISA LANGSUNG BEGINI
// KARENA YANG DICETAK <PENDING>
// console.log(janji2);

janji2.then(() => console.log(janji2));

function cobaPromise() {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Janji ketiga ditepati');
        }, 5000);
    });
}

console.log(cobaPromise());

// MEMASUKKAN cobaPromise ke dalam constant
const coba = cobaPromise();
coba.then(() => console.log(coba));