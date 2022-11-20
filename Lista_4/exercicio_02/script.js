const limite = 7;

var a;
var b=0;
var c;

a = b + 1;

b = a;

c = b * 3 + 2;

for(;;){
    b = 0;
    a++;
    
    if(a % 5 == 0){
        break;
    }
    
    b = c - 1;
}
do{
    c++;
    a = c - b;
} while(c<limite);

a = 1;

while (1){
    a++;
    
    if (a < limite){
        break;
    }
}