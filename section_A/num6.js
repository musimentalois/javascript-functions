function longestWord(sentence){
    let arr = sentence.split(' ');
    let Word = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > Word.length){
            Word = arr[i]

           
        }
        
    }
    
    console.log(Word);

}
longestWord("web development tutorial");



                                    