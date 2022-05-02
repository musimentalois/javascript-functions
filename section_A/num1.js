function reverseNumber(num){
    let stringNum = num.toString();
    let numArray = stringNum.split("");
    let finalNum = "";
    for(let i=numArray.length - 1;i>=0;i--){
        finalNum += numArray[i];
    }
    console.log(finalNum);
}
reverseNumber(20045);