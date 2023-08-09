// for(let i = 2; i <= 5; i++){
//     // console.log(i)
//     for(let j = 1; j <= i; j++){
//         if (j % 2 === 0){
            
//             console.log(2)


//         }

//     }
// }

// ทำในห้อง
// ทำให้บอกให้ได้ก่อนว่าอะไรคือ เลขเฉพาะ



//5/1
//5/2
//5/3
//5/4
//5/5
for( let n = 2; n <= 100; n++ ){
    let isPrime = true;
    for(let divider = 2; divider < n; divider++){
        if(n % divider == 0){
            isPrime = false;
        }
    }
    if (isPrime) console.log(n)
}