function numberOfVowels(string){

    let list = ["a","e","o","i","u","A","E","O","I","U"];
    let count = 0;
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < list.length;j++){

            if(string[i] == list[j]){
                count++;
        }
        
        
         
    }
    


    }
    return count;
}
console.log(numberOfVowels("the quick brown fox"))