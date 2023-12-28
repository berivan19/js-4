/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//* ORNEK: paramteresiz, donussuz
//***********************************************/
// yaz()  //! error
const yaz = () => console.log("Hello JS")
yaz()

//* ORNEK: paramterli, ve donus degerli
//***********************************************/
const kareAl = (num) => num * num
console.log("Kare:", kareAl(4))

const hesapla = (x,y) => {
const toplam = x + y
const carpim = x*y
const sonuc = carpim/toplam
return sonuc 
}
console.log("sonuc=",hesapla(4,2));

////////////

const yasHesapla = (dob) => new Date().getFullYear() - dob

console.log("yas:", yasHesapla(1990));

///////////

const silindirHacim = (r,h) => Math.PI*r*r*h

console.log(`hacim=${silindirHacim(2,3 )}`);

////////////

const topla = (a,b) => a + b
const cikar = (a,b) => a - b
const carp = (a,b) => a * b 
const bol = (a,b) => a / b 

const hesapMakinasi = (num1,num2,op) => {
    let result = 0
    switch (op) {
        case "+":
           result = topla(num1,num2) 
            break
        case "-":
           result = cikar(num1,num2) 
            break
        case "*":
           result = carp(num1,num2) 
            break
        case "/":
           result = bol(num1,num2) 
            break
        default:
            alert("yanlis op girisi")
            break
    }

    return result
}


const num1 = +prompt("1.sayi")
const op = prompt("işlem giriniz")
const num2 = +prompt("2.sayi")

console.log(`${num1} ${op}${num2}=${hesapMakinasi(num1 , num2, op)}`)
