let num = prompt('Num')
let sum = 0
while(num){
    let remainder = num % 10;
    num = (num - remainder)/10;
    sum += remainder;
}
console.log(sum);
