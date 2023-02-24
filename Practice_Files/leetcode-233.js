let n= 15;
let count=0;
// export default count = 0;
    for (let i = 1; i <= n; i *= 10) {
      const divisor = i * 10;
      // console.log(divisor);
      const quotient = Math.floor(n / divisor);
      // console.log(quotient);
      const remainder = n % divisor;
      // console.log(remainder);
      if (quotient > 0)
        count += quotient * i;
      // console.log("count 1 :",count)}
      if (remainder >= i)
        // console.log("i is :",i);
        count += Math.min(remainder - i + 1, i);
  }
    // console.log(count);
// export {count};
module.exports = count;
// export function hello(){
//   console.log("Hello from gokul");
// }