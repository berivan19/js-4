// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/

//! ReferenceError: Cannot access 'topla' before initialization
//? bu yontemde hoisting olmadigi once fonksyinun tanimlanmasi sonrasinda
//? kullanilmasi gerekir.
// console.log(topla(2, 3))

//? function expression yontemi ile bir fokns. tanimlanmasi

const topla = function(a,b){
      
    return a + b
}

console.log("toplam:",topla(3,7));



const tekVeyaCift = function(num){
    const result = num % 2 ? "tek" : "cift"
    return `${num} ${result} dir`
}

console.log(tekVeyaCift(5)) ;
console.log(tekVeyaCift(5));

//3 sayının en buyugunu bulan 
 const bulEnBuyuk  = function (s1,s2,s3){
    return Math.max(s1,s2,s3)
 }

console.log("en buyuk=",bulEnBuyuk(4,2,5));

const yaz = () => console.log("hello js");
yaz()

const kareAl = (num) => num * num
console.log("kare:",kareAl(4));







