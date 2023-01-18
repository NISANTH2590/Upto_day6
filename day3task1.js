let read = require('readline-sync')
console.log("Enter coordinates for rectangle a");
let ax1 = -2//read.question();
let ay1 = -2//read.question();
let ax2 = 2//read.question();
let ay2 = 2//read.question();
console.log("Enter coordinates for rectangle b");
let bx1 = -2//read.question();
let by1 = -2//read.question();
let bx2 = 2//read.question();
let by2 = 2//read.question();
let area1 = (ax2-ax1)*(ay2-ay1);
let area2 = (bx2-bx1)*(by2-by1);
let i,i1,j,j1;
if((ay2>=0) &&( by2>=0)){
     i = Math.min(ay2,by2);
}if((ax2>=0) && (bx2 >=0)){
    i1 = Math.min(ax2,bx2);
}if((ax1<=0) && (bx1<=0)){
    j = Math.max(ax1,bx1);
}if((ay1<=0)&&(by1<=0))
    j1 = Math.max(ay1,bx1);

    let intersection = 1;
if(i>0)
intersection *= i;
if(i1>0)
intersection *= i1;
if(j>0)
intersection *= j;
if(j1>0)
intersection *= j1;
console.log(area1+area2-intersection)
