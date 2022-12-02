//base case

function sumRanges(num) {
  //STOP GAP - BASE CASE
  if (num === 1) return 1;
  //

  return num + sumRanges(num - 1);
}
sumRanges(3);

/* -----------  
 await return 3 + sumRanges(2)
            await return  2 + sumRanges(1);
                           await return 1

------------- */
