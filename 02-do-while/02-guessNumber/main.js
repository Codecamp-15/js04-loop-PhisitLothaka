// let ansNumber = prompt('Enter your magic number');

// ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber);

// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === "";
// let isNan = isNaN(ansNumber);

// let isValid = ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber);
// let outOfRang = Number(ansNumber) > 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <=99;

// if(isValid){
//     alert('Invalid Input');
// } else if (outOfRang){
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try to guess number');

// }

// V2 : รับ input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้

let isValid ;
let ansNumber;
let isEmpty;
let isNan;
let outOfRang;

do{
     ansNumber = prompt('Enter your magic number' || '');
    // isValid = ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber);
    isEmpty = ansNumber.trim() === "";
    isNan = isNaN(ansNumber);
    outOfRang = Number(ansNumber) > 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan){
        alert('Invalid Input. Try 1-99');
    }else if (outOfRang){
        alert('Inavalid Range, Try 1-99')
    }
}while(isEmpty  || isNan)

// program 2 : Guess
// ทายซ้ำ
// ทายได้ไม่เกิน 5 ครั้ง
let guessNumber; 
do{
    guessNumber = prompt('Emter your answer')||'';

    isEmpty = guessNumber.trim() === "";
    isNan = isNaN(guessNumber);
    outOfRang = Number(guessNumber) > 1 || Number(guessNumber) > 99;
    if(isEmpty || isNan){
        alert('Invalid Input. Try 1-99');
    }else if (outOfRang){
        alert('Inavalid Range, Try 1-99')
    }else if (+guessNumber > +ansNumber){
        alert('Too High');
    }else if(+guessNumber < +ansNumber){
        alert('Too Low');
    }else if (+guessNumber == +ansNumber){
        alert("Corect")
    }


}while(+guessNumber !== +ansNumber);