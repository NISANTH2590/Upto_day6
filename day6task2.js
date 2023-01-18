let pass = [7,7,7,5,2,7];
let input = [[7,5,3],[1,9,4],[8,2,6]];
let out = 0,prev =pass[0],br=0;
for(let m = 1;m<pass.length;m++){
    if(pass[m]==prev)
        continue; 
 else{
  for(let i=0;i<input.length;i++){
    for(let j=0;j<input[i].length;j++){
            if(pass[m]==input[i][j]){
            if(i-1>=0 && (input[i-1][j]==prev)){
                out+=1;
               //console.log("A"+prev);
                break;
            }else if(i+1<input.length && (input[i+1][j]==prev)){
                out+=1;
              // console.log("B"+prev);
                break;
            }else if(j-1>=0 && (input[i][j-1]==prev)){
                out+=1;
              //console.log("C"+prev);
                break;
            }
            else if(j+1<input.length && (input[i][j+1]==prev)){
                out+=1;
              // console.log("D"+prev);
                break;
            }
            else{
               out+=2;
               console.log("E"+prev);
                break;
            }
        }
     }
    }
  }
    prev = pass[m];
}
out++;
console.log(out)

