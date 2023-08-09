console.log("learn while loop");

// ประเภทของ loop
//  - Condition Loop ตัดสนใจว่าจะรันต่อไหม จาก Boolean
//  - Counting Loop "----------------" จาก ตัวเลข
//  - List Loop "--------------------" จาก จำนวนของในรายการ

// while คือ condition Loop 

console.log("starting...")

let i = 1;

// while (i <= 20){
// loop block
// if(i % 3 == 0){
//     console.log(i);
// }else if(i % 5 == 0){
//     console.log(`${i} : High Five`)
// }

// if(i % 5 == 0){
//         console.log(`${i} : High Five`)
//     }else if(i % 3 == 0){
//         console.log(i);
//     }

// if(i % 3 != 0){
//     console.log(i);
// }
// i++;//++i
// }

while (i <= 20) {

    if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i}  : Fizz Buzz`)
        } else if (i % 5 == 0) {
        console.log(`${i}  : Buzz`)
    }  else if (i % 3 == 0) {
        console.log(`${i}  : Fizz`);
    }else{
        console.log(i)
    }
    i++;
}




console.log("end...")