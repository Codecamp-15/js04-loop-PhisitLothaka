// หาผลรวมตัวเลขทุกตัว
// let sum = 0;
// for(let i = 1; i <= 100;i++){
//      sum += i;
//     // console.log(i);
// }
// console.log(sum);

// หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// let sumEven = 0;
// let sumOod = 0;
// for(let i = 1; i <= 100; i++ ){
//     if(i % 2 == 0){
//         sumEven += i;
//     }else{
//         // console.log(i);
//         sumOod += i;
//     }
// }
// console.log(sumEven);
// console.log(sumOod);

// หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...)
//  ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEven = 0;
let sumOod = 0;


for(let i = 1; i <= 100; i++ ){
   if(i % 2 == 0){
       
       sumEven += i**2;
    //    console.log(sumEven);
   }
   if(i % 3 == 0){
    sumOod += i**2;
   }
}
console.log(sumEven);
console.log(sumOod);
console.log(sumEven-sumOod);


