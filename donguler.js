//while
//let i=0;
//while(i<10){
//    console.log(i);
//    i++;
//}

let i=0;
do{
 console.log(i);
 i++;
}while(i<10){
    console.log("dongu bitti");
};

for(let z=0;z<5;z++){
    if(z==2){
        console.log('iki'+' '+z);
        continue;
    }
    console.log('z degeri:'+z);
}

//iç içe for
for(let y=0;y<5;y++){
    console.log(y+' '+'dir');
    for(let k=0;k<4;k++){
        console.log(k+' '+'dir');
    }
}