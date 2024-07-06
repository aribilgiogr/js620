//Söz Dizimi (syntax):

//const myconst //const (sabit) yapılar eşitliksiz yazılamaz.

let myvar //let, var (değişken) yapılar daha sonra doldurulma ihtimallerinden dolayı tanımsız (undefined) olarak tutlabilirler.

//let: Bulunduğu block-scope ({}) alanının dışında tanımlanmaz, aynı alanda aynı isimde bir tanımlama daha yapılamaz.
//let myvar

//İsimlendirme Kuralları:

let benimdegiskenim
let _benim_degiskenim //_snake_case
let _
let BenimDegiskenim //PascalCase
let benimDegiskenim //CamelCase

let sayi1
let sezon2bolum3

//Uygunsuz İsimler:
//let 1Sira //İsimler sayıyla başlamaz.
//let benim degiskenim //'_' dışında özel karakter bulunduramaz


//Sabit: Bir nesne (karmaşık tip) değilse değişime kapalıdır, eşitlik kullanılarak atama bir kez yapılır.

const sabit = 123
//sabit = 123 //"TypeError: Assignment to constant variable." mesajı alırız.

const maas = 20002.5
const net = maas * 0.85
console.log(maas, net);

//Primitif (ilkel) Veri Tipleri: number, bool
//Number (int, float): 
let tamsayi1 = 1452
let tamsayi2 = -1452

let ondalik1 = 45.123
let ondalik2 = -87.45
let ondalik3 = .85
let ondalik4 = 10.

//Referans (Gelişmiş) Tipler: string, array, object, function, class. Primitif ve Referans tiplri kulanarak oluşmuş yapılardır. 

//String: Metin veri tipleridir, 
let metin1 = "ilker turan"
let metin2 = 'ilker "yolunda gerek" turan'
let metin3 = `adfakj jkasf hkja hfdf asdf
 sfdsd f
  sdfsd ds f dsf
   sdsd fsd 
   fs
   daf 
    sdf
    f sd`
let formatlanmis_metin = `\${} Yapısı İçin Örnek\\: Kişi: "${metin1}", Kişinin Brüt'ü: $${maas}, Net: $${maas * .85}`

console.log(formatlanmis_metin)

//Array (Dizi): Her türden veriyi sıralanmış olarak taşıyan yapılardır. 0'dan başlayarak her değere numara verir.
const sayilar = [2, 3, 4, 5, 6]
const kart_turleri = ['Kupa', 'Karo', 'Maça', 'Sinek']
const kart_degerleri = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Vale', 'Kız', 'Papaz']
const konumlar = [[23, 49], [14, 63], [28, 29]]
console.log(kart_degerleri);
console.log(kart_degerleri[0], kart_degerleri[12]);
console.log("Dizi Uzunluğu:", kart_degerleri.length);
let en_son_index = kart_degerleri.length - 1
console.log(kart_degerleri[en_son_index]);







