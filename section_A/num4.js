

function alphabetical_order(word){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let splitted = letters.split('')
    let string = word.split("");
    let orderedWord = "";
    for(let i = 0;i<splitted.length;i++){
        
        
        for(let j= 0; j<string.length; j++){
        
            if(splitted[i] == string[j]){
                orderedWord += string[j];
            }
            
            
        }

    }
    return orderedWord;

}
console.log(alphabetical_order('webmaster'));

