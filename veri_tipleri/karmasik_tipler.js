// Karmaşık Veri Tipleri:

//Array (Dizi): Ard arda eklenmiş, her biri bir adres alan (0'dan başlayarak) yapılardır.

let renkler = ["Kırmızı", "Siyah", "Beyaz", "Yeşil", "Turuncu"]

let resimler = ["Sinek", "Kupa", "Karo", "Maça"]
let degerler = ['As', 2, 3, 4, 5, 6, 7, 8, 9, 10, "Vale", "Kız", "Papaz"]

console.log(resimler);
console.log(degerler);

// Dizi Elemanlarına Erişim:

const ilk_renk = renkler[0] // 0 adresindeki veriyi getirir.
const ikinci_renk = renkler[1] // 1 adresindeki veriyi getirir.

console.log(ilk_renk, ikinci_renk);

// Dizi Uzunluğu:

const uzunluk = renkler.length
console.log(uzunluk);
// Dizilerde sıra numarası 0'dan başladığı için dizi uzunluğu direk sınır dışı kalır, o yüzden 1 çıkardık.
console.log("En son eleman:", renkler[uzunluk - 1]);

// Dizi elemanı ekleme

const sayilar = [8, 7, 5, 2, 1]
console.log(sayilar);
sayilar.push(88) // Dizi sonuna yeni eleman ekler.
console.log(sayilar);
sayilar.unshift(77) // Dizi başına yeni eleman ekler.
console.log(sayilar);

//Diziden eleman çıkarma:

const son_sayi = sayilar.pop() //En son değeri alır ve eşitliğin solunda duran yapıya aktarır.
console.log(son_sayi, sayilar);
const ilk_sayi = sayilar.shift() //İlk değeri alır ve eşitliğin solunda duran yapıya aktarır.
console.log(ilk_sayi, sayilar);

// Dizi elemanını değiştirme:

sayilar[3] = 1144
console.log(sayilar);

//Dizi Fonksiyonları:

const sayilar2 = [99, 88, 77, 66, 55, 44]

const butun_sayilar = sayilar.concat(sayilar2) //İki diziyi ayrı bir diziye birleştirip atıyor. 
console.log(butun_sayilar);

const ilk5 = butun_sayilar.slice(0, 5) // 0. ~ 5. index arasındaki değerleri verir. 5. index dahil değil.
console.log(ilk5);

// Object (Nesne): Anahtar-Değer Çifti (Key-Value Pair)

const kisi = { isim: "ilker", soyisim: "turan", mail: "ilkerturan@outlook.com", uyelik: true, miktar: 25.45, hobiler: ['kahve', 'seyahat', 'fotoğraf'] }

console.log(kisi);

console.log(kisi.isim);

kisi.no = 123456789
kisi['data'] = { a: 4, b: 3, c: 12, d: 9 }
console.log(kisi);

const kisi2 = {
    isim: 'osman',
    miktar: 100
}

const matara = {
    marka: "quechua",
    kapasite: 800,
    miktar: 300,
    renk: "şeffaf"
}

const mataralar = [matara]
const kisiler = [kisi, kisi2]

const bos_nesne1 = {}
const bos_nesne2 = new Object()

console.log(matara);
delete matara.miktar
console.log(matara);



