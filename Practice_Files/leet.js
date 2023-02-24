let nums = [4,3,2,6];
let max=0,totalmax=0,arr1=[];
    if(nums.length==1)
    return 0;

    length = nums.length-1;
    for(let i=0;i<=length;i++){
        let a=0;
        console.log(arr1.length)
        for(let k=0;k<=arr1.length;k++){
           max += a*arr1[k];
           a++;
        //    console.log(max);
        }
        for(let j=0;j<=nums.length;j++){
           max += a*nums[j];
           a++;
        }
         arr1.push(nums.pop());
          if(max>totalmax)
          totalmax = max;
    }