//? Sizga n soni beriladi. Uning eng kichik juft karralisini toping.

// function engKichikJuftKarrali(n) {
//     if (n % 2 === 0) {
//         return n;
//     } else {
//         return n + 1;
//     }
// }

// console.log(engKichikJuftKarrali(4));
// console.log(engKichikJuftKarrali(5));

//? Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi,
//? siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.

// function KubningYuzi(a, b) {
//     if (1 <= a <= 10 && 1 <= b <= 10) {
//         let res1 = a * b
//         let res2 = (a + b) * 2
//         return ['kubning yuzi', res1, 'peremetri', res2]
//     }
//     return [a, b]
// }

// console.log(KubningYuzi(2, 4));

//? MINAB(A,B) - bu funksiyaga 2 ta musbat son jo'natilganda, ularni string turiga o'tkazilgandagi uzunliklarini kichigini qaytaradi.
//? Yaqinda Sardor Azimjonga MINAB(A,B)
//? MINAB(A,B) funksiyasini o'rgatgan edi, lekin Azimjon bu funksiyani qanday ishlatishga juda qiynalmoqda.
//? Shu sababdan Sardor endi unga bu funksiyani qo'llash uchun misol berishga qaror qildi. Sardor Azimjonga N
//? N musbat butun sonini beradi va A∗B=N
//? A∗B=N shartni qanoatlantiradigan A va B
//? B juftliklarning har biri uchun
//? MINAB(A,B) MINAB(A,B) funksiyaning qiymatini hisoblab chiqqach ular orasidan eng kichigini topishni talab qilmoqda.

// function Min(a, b) {
//     return Math.min(a.toString().length, b.toString().length);
// }

// function engKichikMin(n) {
//     let min = Infinity;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             let b = n / i;
//             let current = Min(i, b);
//             min = Math.min(min, current);
//         }
//     }

//     return min;
// }

// let n = 4;
// console.log(engKichikMin(n));

//? savol rasmi img papkaning ichida 5-misol

// function NgachaSonlar(arg) {
//     let sum = 0
//     for (let i = 1; i <= arg; i++) {
//         sum += (i ** 3)
//     }
//     return sum
// }

// let n = 2
// console.log(NgachaSonlar(n));

//? savol rasmi img papkaning ichida 6-misol

// function hisoblaJarima(a, b) {
//     const j = 5;
//     const jarima = b + (a * j);
//     return jarima;
// }

// const xUrunish = 5;
// const TJVaqti = 21;

// console.log(hisoblaJarima(xUrunish, TJVaqti));

//! a#b
//? n soni berilgan. Agar a#b=ab+4a+b a#b = a + b  ab + 4 bo'lsa,
//? 1#(2#(#((n−1)#n)))1#(2#(…#((n−1)#n))…) ni hisoblang.

// function twoarg(a, b) {
//     return a + b + (a * b) + 4;
// }

// function NniTop(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//         res = twoarg(result, i);
//     }
//     return res;
// }

// let n = 4;
// let result = NniTop(n);
// console.log(result);


//?Raxmat aka o'z o'g'illari Rustam va Dilshodga qiziqarli
//? bir topshiriq berdi. Raxmat aka 2 ta butun son S va P
//? (1≤S,P≤104)  (1≤S,P≤10 4) sonlarini aytadi. Rustam va
//? Dilshodning vazifasi esa shunday 2 sonni topishi kerakki
//? ular yig'indisi S ga, ko'paytmasi esa P ga teng bo'lgan
//? butun sonlarni topsishi kerak bo'ladi. Javoblar bir nechta
//? bo'lsa istalgan birini chop eting. Agar yechim yo'q bo'lsa
//? -1 ni chop eting.

// function twoNumbers(S, P) {
//     for (let i = 1; i <= S; i++) {
//         let res = S - i;
//         if (i * res == P) {
//             return [i, res];
//         }
//     }
//     return -1;
// }

// let S = 8;
// let P = 15;

// let result = twoNumbers(S, P);
// console.log(result);


//? Jahongir so'ngi kunlarda tengalamalarga juda qiziqib
//? qoldi. U bir kitobda quyidagi tenglamani ko'rib qoldi.
//? a⋅b⋅c=n    bunda a≠b, a=b va b≠c ,b=c shart bajarilishi kerak
//? va a,b,c va n natural sonlardir.

// function tenglamaYechish(n) {
//     let yechimlar = [];

//     for (let a = 1; a <= n; a++) {
//         for (        let b = 1; b <= n; b++) {
//             for (let c = 1; c <= n; c++) {
//                 if (a * b * c === n && a !== b && b !== c && a !== c) {
//                     yechimlar.push([a, b, c]);
//                 }
//             }
//         }
//     }

//     return yechimlar;
// }

// const n = 12;
// const natija = tenglamaYechish(n);
// console.log(natija);

//? Sizga Selsiy shkalasi bo'yicha harorat beriladi. Uning Kelvin va Farangeyit shkalasi bo'yicha haroratini topuvchi dastur tuzing.
//? Bunda ular quyidagicha bog'langan: Kelvin = Celsius + 273.15; Fahrenheit = Celsius * 1.80 + 32.00

// function haroratKonvertatsiya(celsius) {
//     let kelvin = celsius + 273.15;
//     let fahrenheit = celsius * 1.80 + 32.00;

//     return {
//         kelvin: kelvin,
//         fahrenheit: fahrenheit
//     };
// }

// const celsius = 25;
// const natija = haroratKonvertatsiya(celsius);
// console.log(`Kelvin: ${natija.kelvin.toFixed(2)}, Fahrenheit: ${natija.fahrenheit.toFixed(2)}`);

//? Sizga ikkita natural son beriladi. Sizning vazifangiz shu sonlar
//? orasidagi 3ga bo'linadigan ammo 7 bo'linmaydigan sonlar
//? yigindisini topish. Bunda ikkala chegara ham kiradi.

// function yigindiTop(chegara1, chegara2) {
//     let sum = 0;

//     const minChegara = Math.min(chegara1, chegara2);
//     const maxChegara = Math.max(chegara1, chegara2);

//     for (let i = minChegara; i <= maxChegara; i++) {
//         if (i % 3 == 0 && i % 7 != 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const chegara1 = 1;
// const chegara2 = 10;
// const res = yigindiTop(chegara1, chegara2);
// console.log(`Yig'indi: ${res}`);


//? Doskaga 1 dan n gacha sonlar yozib chiqildi. Ulardan faqat 3,5,7 ga
//? karralilari qolib qolganlari o'chirib tashlandi. O'sha qolgan
//? sonlar yig'indisini toping.

// function qolganSonlarYigindisi(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const n = 5;
// const res = qolganSonlarYigindisi(n);
// console.log(`Qolgan sonlar yig'indisi: ${res}`);

//? Jonibek matematika darsida faktorial darsini o'tdi va
//? u shunday dastur yaratmoqchiki, uning dasturiga ikkita
//? n va m sonlari kiritiladi va dastur n dan m gacha bo'lgan
//? sonlar ko'paytmasida oxirida hosil bo'lgan
//? nollar sonini chop etishi kerak.

// function nolSoniniHisobla(n, m) {
//     let count1 = 0;
//     let count2 = 0;

//     for (let i = n; i <= m; i++) {
//         let num = i;

//         while (num % 2 === 0 && num > 0) {
//             count1++;
//             num /= 2;
//         }

//         num = i;
//         while (num % 5 === 0 && num > 0) {
//             count2++;
//             num /= 5;
//         }
//     }

//     return Math.min(count1, count2);
// }

// const n = 1;
// const m = 5;
// const natija = nolSoniniHisobla(n, m);
// console.log(`Ko'paytma oxiridagi nollar soni: ${natija}`);


//? Bilmasvoy ukalari Ali va Valining yoshini esidan chiqarib qo'ydi.
//? Ali Bilmasvoyga Validan N yoshga kattaligini aytdi. Lekin Bilmasvoy
//? ukalarini yoshini topa olmadi. Keyin Vali Alidan K
//? marta kichikligni aytdi. Bilamsvoy vanihoyat ukalarining yoshini topdi.

// function findAges(N, K) {
//     const Ali = (N * K) / (K - 1);
//     const Vali = Ali / K;

//     return {
//         Ali: Math.round(Ali),
//         Vali: Math.round(Vali)
//     };
// }

// const N = 5;
// const K = 2;

// const ages = findAges(N, K);
// console.log(`Ali ning yoshi: ${ages.Ali}`);
// console.log(`Vali ning yoshi: ${ages.Vali}`);

//? Bir kuni Shohruhga domla bir masala berdi. U matematikani
//? juda zo'r bilardi, ammo, bu masalada qiynaldi. Masala quyidagicha edi:
//? F funksiyani N-hadini topish uchun quyidagicha ish bajarish kerak edi:
//? F(n)=1+3∗n+3∗n∗n

//? Sizga N butun soni berilgan. Siz esa quyidagi
//? F(0)+F(1)+F(2)+F(n)  F(0)+F(1)+F(2)+…+F(n) yig'indini
//? hisoblashingiz kerak.


// function FniTop(n) {
//     return 1 + 3 * n + 3 * n * n;
// }

// function sumF(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += FniTop(i);
//     }
//     return sum;
// }

// const n = 3;

// const result = sumF(n);
// console.log(`F(${n}) = ${result}`);