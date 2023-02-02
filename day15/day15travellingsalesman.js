function permutations(vertex) {
	let result = [];
	const permute = (arr, m = []) => {
	  if (arr.length === 0) {
		//console.log(m)
		result.push(m);
		//console.log("res/",result)

	  } else {
		for (let i = 0; i < arr.length; i++) {
		  let curr = arr.slice();
		 // console.log("cu : ",i,curr)
		  let next = curr.splice(i, 1);
		  //console.log("m ",m)
		  permute(curr.slice(), m.concat(next));
	   }
	 }
	 return result; 
  }
    
	return permute(vertex); 
  }
  
  function travellingSalesman(graph, s) { 
	  let vertex = []; 
	  for (let i=0; i<n; i++) { 
		  if (i != s) { 
		  vertex.push(i); 
		  } 
	  } 
	//  console.log(vertex);
	 let min_path = Number.MAX_SAFE_INTEGER; 
	 let next_permutation=permutations(vertex);
	// console.log("hi ",next_permutation) 
	 for (let i of next_permutation) { 
	   let current_pathweight=0; 
	   let k=s; 
	   for (let j of i) { 
		 current_pathweight += graph[k][j];
		  k=j; 
	  }
	   current_pathweight += graph[k][s];
		min_path=Math.min(min_path, current_pathweight);
	   }
		return min_path; 
	  }
  
  let graph=[ 
	  [0,10,25,20],
	  [10,0,35,25],
	  [15,35,0,30],
	  [20,25,30,0]
	//   [0,10,15,20],
	//   [5,0,9,10],
	//   [6,13,0,12],
	//   [8,8,9,0]
	  ];
  let s=0;
  let n = graph.length;
  console.log(travellingSalesman(graph, s));


// let n = 4;
// let MAX = 1000000;
// let dist = [
// 	[0, 0, 0, 0, 0], [0, 0, 10, 15, 20],
// 	[0, 10, 0, 25, 25], [0, 15, 25, 0, 30],
// 	[0, 20, 25, 30, 0],
// ];
// let memo = new Array(n + 1);

// for (let i = 0; i < memo.length; i++) {
// 	memo[i] = new Array(1 << (n + 1)).fill(0)
// }

// function fun(i, mask)
// {
// 	if (mask == ((1 << i) | 3))
// 	return dist[1][i];
		
// 	// memoization
// 	if (memo[i][mask] != 0)
// 	return memo[i][mask];

// 	let res = MAX; 

// 	for (let j = 1; j <= n; j++)
// 	if ((mask & (1 << j)) && j != i && j != 1)
// 		res = Math.min(res, fun(j, mask & (~(1 << i)))
// 		+ dist[j][i]);
// 	return memo[i][mask] = res;
// }
// let ans = MAX;
// for (let i = 1; i <= n; i++)
	
// 	ans = Math.min(ans, fun(i, (1 << (n + 1)) - 1)
// 	+ dist[i][1]);

// console.log("The cost of most efficient tour " + ans);

