// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")



 let i = 0
 while( i < 10){
 console.log(i)
 i++
 }

console.log("dongu bitti");

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.


// let not = prompt("lutfen notunuzu giriniz")

// if(not < 0 || not > 100 ) {
//     alert("not sısfırdan kucuk veya 100 den buyuk olamaz")
// }

let not2 = prompt("lutfen bir sayi giriniz:")

for( ;not2 < 0 || not2 > 100 ; ) {
    console.log("not sisfirdan kucuk veya 100 den buyuk olamaz");
    not2 = prompt("lutfen notunuzu tekra giriniz")

}

console.log("girdiğiniz not:", not2);


let j = 0


do {
    console.log(j)
    j++
} while( j < 10)

console.log("dongu bitti");





  