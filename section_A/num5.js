function upperCase(string){
    
    let word = string.split(' ');
    

    let str = "";
    
    for(let i = 0; i < word.length;i++){
        word[i] = word[i].split('');
        word[i][0] = word[i][0].toUpperCase();
        word[i] = word[i].join('');
        
         
        
    }
    return word.join(' ');
}
   
console.log(upperCase("my name is lois"));