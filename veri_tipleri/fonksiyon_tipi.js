//Standart Fonksiyon Tanımlama:

function standart() {
    console.log("Bu standart fonksiyondur.");
}

standart() // Bir fonksiyonun çağırılma yöntemidir.
standart() // Bir fonksiyonun çağırılma yöntemidir.
standart() // Bir fonksiyonun çağırılma yöntemidir.
standart() // Bir fonksiyonun çağırılma yöntemidir.

// Ecma Script 6 (es-6) Nesnel Fonksiyon:
const nesnel = function () {
    console.log("Bu nesnel fonksiyondur.");
}

nesnel()

//Ecma Script 6 (es-6) Kompakt Nesnel Fonksiyon: Lambda (=>) ifadelendirilmesi yöntemi kullanır.
const nesnel_kompakt = () => console.log("Bu kompakt nesnel fonksiyondur.");

nesnel_kompakt()


//Örnekler:
//Naked Function: Bir parametre beklentisi yoktur, kullanılabilir bir cevap vermez.
const say_hello = () => console.log('Hello, world!');

say_hello()

const topla = (a, b) => console.log("Toplam:", a + b);

topla(8, 7)
topla(18, 7)
topla(8, 71)
topla(45, 5)
topla(12, 33)

const indirim_hesapla = (fiyat, indirim_orani, vergi_orani) => {
    const vergili_fiyat = fiyat * (100 + vergi_orani) / 100
    const indirimli_fiyat = vergili_fiyat * (100 - indirim_orani) / 100
    return indirimli_fiyat
}

console.log(indirim_hesapla(100, 12, 20));

const kisi = {
    ad: 'ilker',
    soyad: 'turan',
    tam_ad: () => kisi.ad + " " + kisi.soyad
}

console.log(kisi.tam_ad());
kisi.ad = 'ilkay'
console.log(kisi.tam_ad());


let simdi = new Date()
console.log(simdi);

date_format = {
    /* Day Name Strings */
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],

    /* Month Name Strings */
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    /* AM/PM Designators */
    amDesignator: "AM",
    pmDesignator: "PM",

    getShortDate: (date) => `${date.getDate()} ${date_format.abbreviatedMonthNames[date.getMonth()]} ${date.getFullYear()}`,

    getLongDate: (date) => `${date.getDate()} ${date_format.monthNames[date.getMonth()]} ${date.getFullYear()}, ${date_format.dayNames[date.getDay()]}`
}

console.log(date_format.getLongDate(simdi));