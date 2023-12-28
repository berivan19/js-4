//? DECLARATİON



//bir fonk. declare ettik
function topla(){
    let a = 5
    let b = 10
    let sonuc = a + b
    console.log(sonuc);  
}
// burda da çağırdık fonksiyounu
topla() //invoke ettik fonk. , calling yaptık
topla(  )

for (let i= 0 ; i<3;i++){
    topla()
    console.log(i);
}

//parametreli fonk. tanımlama

// function carp ( s1, s2){
//     console.log(s1 * s2);
// }



// let s1 = +prompt("s1:")
// let s2 = +prompt("s2:")
// carp(s2,s1)

//ornek: parametreli

function yazdir(lang,name = "noname"){
    console.log(`${lang} ${name}`);
}

yazdir("hello","ahmet")
yazdir("hallo","canan")
yazdir("canan")
yazdir()


// VERİ DÖNDÜREN (RETURN) FONK.

function bol (a,b){
      const res = a / b
      return res
}

let sonuc = bol(10,2)
console.log("sonuc=" , sonuc);


//ÖRNEK

function toplama (n1,n2,n3){
      return n1 + n2 +n3
}

console.log(`SONUC:${toplama(3,5,7)}`);

//2.ÖRNEK
//? Ornek:Tek-Cift
//? Console'dan girilen bir sayinin tek veya cift oldgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar ile yaziniz.




function tekVeyaCift (num) {
    return num % 2 === 0 ? "cıft" : "tek"
}

const sayi = Number(prompt("bir sayı giriniz")) 
console.log(`${sayi} ${tekVeyaCift(sayi)} dir`);

//1. yöntemdekı fonk.konumu

yaz()


function yaz(){
    console.log("merhaba");
}

yaz()
yaz()






