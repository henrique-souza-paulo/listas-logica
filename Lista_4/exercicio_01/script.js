var i = 0;

var j;

var x = 1;

for ( ; i<2; ){
    for (j=2; j>-1; j--){
        x +=i+j;
    }

    i++;
    do {
        x+=j;
        j++;
    } while (j<2);
}

while(x<20){
    x+=2;
    if (x%2==0){
        x--;
    }
}