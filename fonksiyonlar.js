//Functions

/*function karesiniAl(sayi){
return sayi*sayi;
}

let a=karesiniAl(2);
let b=karesiniAl(9);
console.log(a);
console.log(b);
*/
function toplam(sayi1,sayi2){
    function karesiniAl(x){
        return x*x;
    }
    return karesiniAl(sayi1)+karesiniAl(sayi2);
}
let sonuc=toplam(4,5);
console.log(sonuc);

// Function Declaration
//function sum(a,b){
//    var c=a+b;
//    return c;
//}
//console.log(sum(10,40));

//function expression -ECMASCRİPT ile geldi
const sum=function(a,b){
    if(typeof a=='undefined'){
        a=0;
    }
    if(typeof b=='undefined'){
        b=0;
    }
    var c=a+b
    return c;
}
console.log(sum(10,20));
console.log(sum(20));