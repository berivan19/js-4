// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}

//girilmeyen dööngü(döngü baştan yanlış)

// for(let i = 1 ; i == 10 ; i++){
//     console.log(i);
// }

// SONSUZ DÖNGÜ

// for(let i = 1 ; i != 10 ; i *= 2){
//     console.log(i);
// }

// for(let i = 0 ; i !=10 ;i += 5){
//     console.log(i);                 // burda çıktı sıfır ve beş olur
// }

// for(let i = 10 ; i > 0 ; i--){
//     console.log(i);                 //? 10 9876543210 diye çıktı alıtız
// }


// 0-100 arasında n adet rastgele sayı üreten kodu yazınız..

 const n = ("Kac adet rasgele sayi uretmek istersiniz?")

for (let i = 1; i <= n; i++) {
  const randomSayi = Math.round(Math.random() * 100)
  console.log(`${i}. rasgele sayi : ${randomSayi}`)
}

// 2 aralıkta verilen doğal sayıların toplamını bulan kodu for döngüsü ile yazıız

// const n1 = 5
// const n2 = 15

//  let toplam = 0

//  for (let j = n1; j <= n2; j++){
//       toplam  = toplam + j
   
//  }

// console.log(toplam);


let n1 = 2
let n2 = 15


if (n1 >= n2){
    console.log("lutfen 1.sayıyı daha buyuk giriniz");
}else{

let toplam = 0
for(n1; n1<=n2; n1++){
  toplam += n1

}

console.log(toplam);
}









