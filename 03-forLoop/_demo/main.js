console.log('learn counting loop');

console.log('starting...');
// () = parenthesis = วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 1; i <= 20 ; i++){
//     if(i % 3==0 && i% 5==0){
//         console.log("FizzBuZZ");
//     }else if(i % 5 == 0){
//         console.log("BuZZ");
//     }else if(i % 3 == 0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }

// }
 
// for (let i = 1; i <= 20 ; i++){
//     if(i % 3==0 && i% 5==0){
//         console.log("FizzBuZZ");
//     }else if(i % 5 == 0){
//         console.log("BuZZ");
//     }else if(i % 3 == 0){
//          continue; //ไม่ทำผ่านไปเลย
//     }else{
//         console.log(i);
//     }

// }

// EX3
// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0) console.log(i);
//     else continue;// ไม่ทำผ่านไปที่ step แล้วทำ loop ครั้งต่อไปเลย
//     console.log('Even');
// }

// EX4
// let str = '' ;

// for(let i = 1; i <= 10; i++){
//     if(i % 3 == 0)continue;
//     str += i;
// }
// console.log(str);

// EX5 : remove vowel (a,e,i,o,u)
// let src = 'codecamp';
// let rec = '';

// for (let i = 0 ; i < src.length ; i++){
//     // console.log(i,src[i]);
//     let c = src[i];
//     if(c == "a"|| c== "e" || c == "i" || c == "o" || c == "u"){
//         continue;
//     }
//     rec = rec + src[i];
// }
// console.log(rec);

// ADVANCE : Nested Loop;
// Multiplication Table
for(let i= 2 ; i <=3 ; i++){
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`)
    for (let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log("\n");
}

console.log("end....");