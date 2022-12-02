function countDown(num) {
   while (num >= 0) {
      console.log(num);
      num--;
      countDown(num);
   }

countDown(4);
