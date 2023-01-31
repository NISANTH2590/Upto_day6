function maxChainLength(pairs,n)
{
	pairs.sort(([, b], [, d]) => b - d )
  //console.log(pairs)
  let currentEnd = pairs[0][1]
  let count = 1
  for (const [start, end] of pairs) {
    if (start > currentEnd) {
      count += 1
      currentEnd = end
    }
  }
return count;
}

let arr=[ [1,2],[6,7],[3,4]];
		
console.log("Length of maximum size chain is " +
				maxChainLength(arr, arr.length));

