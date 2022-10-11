// alert("merhaba");
// console.log("merhabaa");

var name;
// sayisal ve komut ifadelerle baslayamaz. birden fazla tanımlama olamaz

var x;
x="nisa";
x='nisa'; //ikisi de ayni
console.log(x); //tanimmsiz  

let fullname="Nisa Yurdagul";
console.log(fullname);

const email="nisa@gmail.com";
console.log(email);

//email="aa@gmail.com";
//console.log(email); //hata const sabit deger verdigimiz degiskenlerde

//Primitive Types
//undefined 
var x;
console.log(typeof x); 

//null
var y=null;
console.log(typeof y); //objective

//string 
var name='nisa';
console.log(typeof name);

//number
var age=21;
console.log(typeof age);

//boolen
var online=true;
console.log(typeof online);

//Reference Types-Objects
//Array
var cars=['volvo','BMW','Mercedes'];
console.log(typeof cars);

//Objects
var person={
    name:'nisa',
    age:24
};
console.log(typeof person);

//function
var isAlive=function(){
    return 0;
}
console.log(typeof isAlive);


//Operatorler
var sonuc;
const a=60;
const b=12;
let t=9;
let z=7;

//Aritmetik
sonuc=z++; //sayiyi 1 arttirdi ancak hafizada 8 olarak tuttu.
sonuc=++z; //sayiyi 1 arttirdi ekrana da yazdirdi
sonuc=z--; //8 olarak hafizada tuttu
sonuc=--z; // 7 olarak yazdirid 
console.log(sonuc);

//aritmetik
sonuc=a; // 60 degeri atandi
sonuc+=a; //sonuc=sonuc+a

z=9;
t=9;
//Karsilastirma Operatorleri
sonuc=a==t; //dogru ise true yanlis ise false dondurur 
// 3 esittirle de yapilabilir.
sonuc=a===t; //typeof kontrol ediliyor

//Mantiksal 
//&& || !


// Date Object
var d=new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getDay()); //index olarak



//set methods
d.setFullYear(1996);
d.setMonth(12);
d.setDate(25);

//string methodları
const ad='Nisa';
const soyad='yurdagül';
var x=ad+' '+soyad;
console.log(x);

//string length
//x=ad.length;
//string toUpperCase: büyütme
//string toLowerCase: küçültme
//indexof:arama yapar

//string subString
//x=x.substring(0,5);


//number methodları
var x=10;
console.log(typeof x);

//parseIntt parseFloat
var sayi=24.445;
sayi=parseInt(sayi);
console.log(sayi);
//sayi=parseFloat(sayi);

//precision fixed_stringe dönüştürür
sayi=sayi.toPrecision();
console.log(sayi);
 //Math 
 sayi=Math.PI;
 console.log(sayi);
 //Math.min(23,25,12);-max
 //random 
 sayi=Math.random();

 //Arrays

 var country=['Türkiye','Bulgaristan','Yunanistan'];
 console.log(country);
 console.log(typeof country);

 var cn=['Turkiye',15,null,undefined];
 console.log(cn);

 //get Arrays
 console.log(cn[0]);

 //set Arrays
 cn[0]='Bursa';
 console.log(cn[0]);

 //add arrays item
 country.push(19);
 country.push('USA');
 country.unshift(23);
 console.log(country);

 //remove arrays

 country.pop();//sondaki ifadeyi siler
 country.shift();//baştaki ifadeyi siler
 //reverse elemanların yerini değiştirir baştaki ifade sonda olur.

 //sort sıralama

 console.log( country.sort());


