let price = 100_000;
// let increase = (price*2.5)/100;
  for(let i = 1; i <= 10; i++){

    price += (price*2.5)/100;
    console.log(`ปีที่ ${i} : ${price}`)
  }
  console.log(price.toFixed(2));