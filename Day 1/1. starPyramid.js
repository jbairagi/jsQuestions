var i, j, k;
var line;

for(i=1; i <= 5; i++){
	k=0;
	line = '';
	for(var x=1; x <= 5-i; x++){
		line = line.concat(" ");
	}
	while(k!= 2*i-1){
		line = line.concat('*');
		k++;
	}
    console.log(line);
}