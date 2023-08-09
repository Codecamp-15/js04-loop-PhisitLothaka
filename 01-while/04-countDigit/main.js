let num = +prompt('Number : ');
let i = 0;
let n = 0;
// while(num >= 1){
    
        // console.log(i)
//         num = num / 10;
//         n++
    
    
// }
// console.log(n);

let sum = 0
// หารแบบลงตัว
while(num){
    let remainder = num % 10;
    num = (num - remainder)/10;
    sum += remainder;
    i++;
}
console.log(i,sum);
