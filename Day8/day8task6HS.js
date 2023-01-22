var arr=[12,11,13,5,6,7];
var len=arr.length;
heapSort(arr,len);
function heapSort(arr,len)
{
    var lrg=Math.floor(len/2)-1;
    for(var i=lrg;i>=0;i--)
    {
        var l=(i*2)+1,r=(i*2)+2;
        if(arr[l]>arr[r] || r>=len)
        {
            if(arr[i]<arr[l])
            {
                temp=arr[i];
                arr[i]=arr[l];
                arr[l]=temp;
            }
        }
        else if(r<len)
        {
            if(arr[i]<arr[r])
            {
                temp=arr[i];
                arr[i]=arr[r];
                arr[r]=temp;
            }
        }
    }
    len-=1;
    temp=arr[len];
    arr[len]=arr[0];
    arr[0]=temp;
    if(len>1)
    {
        heapSort(arr,len);
    }
   
}
console.log(arr);