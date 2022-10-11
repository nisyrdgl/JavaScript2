//switch statements
let category ='coffe';
let dat;
switch(category){

    case 'coffe':
        console.log('sade kahveniz hazirlaniyor');
        break;

    case 'tea':
            console.log('cayiniz  hazirlaniyor');
            break;
    case 'milk':
                console.log('sutunuz  hazirlaniyor');
                break;
    default:
        console.log('hatali kategori sectiniz');                    
}

switch(new Date().getDay()){

    case 0:
        day='pazar';
        console.log(day);
        break;

    case 1:
        day='pazartesi';
        console.log(day);
       break;
    case 2:
        day='sali';
        console.log(day);
       break;
    case 3:
        day='carsamba';
        console.log(day);
        break; 
    case 4:
        day='persembe';
        console.log(day);
       break; 
    case 5:
        day='cuma';
        console.log(day);
        break; 
    case 6:
        day='cumartesi';
        console.log(day);
        break;
    default:
        console.log('hatali gun');                    
}