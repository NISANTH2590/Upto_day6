let d = 256;
function search(pat, txt)
{
	let M = pat.length;
	let N = txt.length;
	let i, j;
	let p = 0;
	let t = 0;
	let h = 1;
	for(i = 0; i < M - 1; i++)
	h = (h * d) 

	for(i = 0; i < M; i++)
	{
		p = (d * p + pat[i].charCodeAt()) ;
		t = (d * t + txt[i].charCodeAt()) ;
	}//Calculation hash values of patterns

	for(i = 0; i <= N - M; i++)
	{
		if (p == t)
		{
			for(j = 0; j < M; j++)
			{
				if (txt[i+j] != pat[j])
					break;
			}
			if (j == M)
				console.log("Pattern found at index " +
								i + " ");
		}

        if (i < N - M)
        {
            t = (d * (t - txt[i].charCodeAt() * h) +
                      txt[i + M].charCodeAt()) ;
        }
	}
}

let read = require('readline-sync')
console.log("Enter the String");
let txt = read.question();
console.log("Enter the Pattern");
let pat = read.question();
search(pat, txt);

