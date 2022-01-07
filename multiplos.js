let lines = gets().split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);//n
let B = parseInt(line[1]);//m
//n por m deve deixar resto 0.
if (((A%B)== 0) ||((B%A)==0)) 
    print("Sao Multiplos"); 
else 
    print("Nao sao Multiplos");
