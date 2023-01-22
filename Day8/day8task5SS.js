//Selection Sort
function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        minindex = i
        for(let j=i;j<arr.length;j++)
        {
            if(arr[j]<arr[minindex])
            minindex = j;
        }
        let temp = arr[minindex];
        arr[minindex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arr = [-2,5,54,-25,0,64,98];
console.log(selectionsort(arr))