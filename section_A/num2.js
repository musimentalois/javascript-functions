function check_palindrome(string){
    let arr = string.split("");
    let forward="";
    let backward = "";
    for(let i = 0; i< arr.length;i++){
        forward+= arr[i];
    }
    for(let i = arr.length-1;i >= 0;i--){
        backward += arr[i];

    }
    if(forward == backward){
        console.log("Palindrome")
    }
    else{
        console.log("Not palindrome")
    }
}
check_palindrome("madam")