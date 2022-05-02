function combination_str(word){
    let combinations = [];
    let index= 0;
    for(let i = 0;i<word.length;i++){

        for(let j = i+1;j <= word.length;j++){
            let str = "";
            for(let k = i;k<j;k++ ){
                str += word[k];

            }
            combinations[index] = str
            index++;
        }
    }
    console.log(combinations)
} 
 combination_str("dog");
