// Tek satırlık açıklama/yorum satırıdır.

/*
Çok satırlı yorum/açıklama yapısıdır.

Genellikle bir kod bloğu hakkında açıklama yapmak için veya dosyanın metasını belirtmek için kullnılır.
 */


//İsimlendirme kuralları: Verilen her isim bu kurallara uymalı, küçük büyük harfler birbirlerinden farklı. (A:65, a:97)

//Doğru isimlendirme: Küçük büyük harfler, '_' karakteri, ortada veya sonda sayi kullanan yapılardır.
myvar = "Değişkenim 1"
myVar = "(camelCase) Değişkenim 2"
MyVar = "(Pascal) Değişken 3"
my_var = "(snake_case) Değişken 4"
myVar1 = "Değişken 5"

//Yanlış isimlendirme:
// my var = "Değişken 6"
// 1myvar = "Değişken 7"
// my,var = "Değişken 8"


// Tanımlamalar:

// Değişenler (var, let):
// var (Global): Tanımlandığı andan itibaren kodun her yerinde kullanılabilen yapılardır. Tanımsız olarak da tutuabilir.
// let (Local): Tanımlandığı parantez içerisinde kullanılır, dışarı yansıtılmaz.
var myvar1 = 5 //5 değeri atandı
var myvar2 //tanımsız (undefined) olarak yapılandırıldı
let mylet1 = 45
let mylet2

{
    //Bu parantezler kodları gruplamak için kullanılır.
    var myvar3 = 15 //15 değeri atandı
    let mylet3 = 115
    mylet2 = 447
}

console.log(myvar1, myvar2, myvar3);
console.log(mylet1, mylet2/*, mylet3*/);

//Sabit (const): Atama ile sadece bir kez kullanılabilir, istenildiği kadar okunur, tanımsız olarak kullanılamaz. Tanımlandığı parantez dışına çıkmaz.

const sabit1 = 135
//sabit1 = 11 //sabit yapılar tekrar atanamaz, hata verir.
