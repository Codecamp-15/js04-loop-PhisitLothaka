//แบบที่ 1
// let star = '';
// for(let i = 1; i <= 1;i++ ){
//     for(let j = 1; j <= 4; j++){
//         star += "* ";
//         console.log(star);
//     }

// }

//แบบที่ เฉลย
// for(let i = 1; i <= 4;i++ ){
//     let star = '';
//     for(let j = 1; j <= i; j++){
//         star += "*";
//     }
//     console.log(star);

// }

// แบบที่ 2
let str ='';
for(let i = 1; i <=4; i++){
    for(let j = 1; j <= 4; j++){
        if(j <= i){
            str += '*';
        }
    }
    str +='\n';
}
console.log(str);
