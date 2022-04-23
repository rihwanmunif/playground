/*
let nama = "munif";
let tahun = 19;
let harga = 10000;

if (tahun < 2){
    console.log(nama, "Gratis");
}else if (tahun > 2 && tahun <= 10){
    console.log(nama, harga);
}else if(tahun > 11 && tahun <= 18){
    console.log(nama, harga * 1.5);
}else if(tahun >= 19){
    console.log(nama, harga * 2);
}else if(tahun > 120){
    console.log(nama, "Invalid Age");
}
*/


/*
var word  = "Wow javascript is so cool";
//var exampleFirstWord = word[0] + word[1] + word [2];
var exampleFirstWord = word.substring(0,3);
var exampleSecondWord = word.substring(4,14);
console.log("First word : " + exampleSecondWord);
*/

/*
let name = 'revan';
let citizenship = 'sitka';
let grade = 97;

//TULIS KODE KAMU DIBAWAH INI
if(name === ''){
    console.log('NAMA ANDA KOSONG! TOLONG DICEK KEMBALI');
}
else if (citizenship ===''){
    console.log('TOLONG ISI KEWARGANEGARAAN ANDA SESUAI KARTU IDENTITAS!');
}
else if (grade === ''){
    console.log('Nilai SNMPTN kosong ! ANDA TIDAK DAPAT MENGIKUTI PROSES SELEKSI');
}
else if (citizenship === 'Indonesia' && grade >= 88){
    console.log('${name}LULUS SELEKSI PROGRAM');
}
else if (citizenship !== 'Indonesia' && grade >= 88){
    console.log('${name}LULUS SELEKSI PROGRAM INTERNASIONAL');
}
else if (grade < 88){
    console.log('${name} TIDAK LULUS SELEKSI');
}
*/


//MELAKUKAN LOOPING MENGGUNAKAN FOR
/*var hasil = "";
console.log("LOOPING FOR PERTAMA");
for(var i = 1; i <= 20; i++){
    hasil = '${i} - I love Coding ';
    console.log(hasil);
}

console.log("LOOPING FOR KEDUA");
for(var i = 20; i >= 1; i--){
    hasil = '${i} - I love FRONT END ';
    console.log(hasil);
}
console.log();
*/
//2. While
var result = "";
/*
console.log("LOOPING WHILE PERTAMA");
var i = 1;
while(i <= 20){
    result = '${i} - I love Coding ';
    i++;
    console.log(result);
}

console.log("LOOPING WHILE KEDUA");
var i = 20;
while(i >= 1){
    result = '${i} - I Love Front End';
    i--;
    console.log(result);
}
*/

//Mengubah huruf besar ke kecil
/*function tukarBesarKecil(kalimat){
    var kecil = kalimat.toLowerCase();
    var hasil = '';
    for (var i = 0; i < kalimat.length; i++){
        if (kecil[i] === kalimat[i]){
            hasil += kecil.toUpperCase()[i];
        }
        else if(kecil[i] !== kalimat[i]){
            hasil += kecil[i];
        }
    }
    return hasil;
}

//TEST CASE
console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY'));
console.log(tukarBesarKecil('My Name is Bond'));
console.log(tukarBesarKecil('IT sHOULD bE me'));
console.log(tukarBesarKecil('00-1-A-3-STrdYW'));
*/

//MENCARI JUMLAH KATA YANG TERDAPAT DIKALIMAT
function hitungJumlahKata(kalimat){
    var hasil = "";
    var jumlah = 0;
    if (kalimat != "" && kalimat != ""){
        jumlah = jumlah + 1;

    }
    for  (i=0; i< kalimat.length; i++){
        if (kalimat[i] != " "){
            hasil += kalimat[i];
        }
        else if (kalimat[i]==="" && hasil != ""){
            jumlah = jumlah + 1

        }
    }
    return jumlah
}
console.log(hitungJumlahKata('I have a dream '));
console.log(hitungJumlahKata('I believe I can code '));
console.log(hitungJumlahKata('I '));