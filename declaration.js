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








