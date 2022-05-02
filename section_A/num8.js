// the function will take array of numbers
//we will first sort the array then the second smallest will be at index "1" and second largest at index "arr.length -2 " since "arr.length -1 is the last element"
function getSecondLargestAndSmallest(arr){

    //we make an outer loop to loop through the whole array
    // we loop until arr.length -1 because we need to compare the second last element with the last element
    for(let i=0;i<arr.length - 1;i++){

        //we make an inner loop which is always starts one position ahead of inner loop and we loop until the last element
        for(let j=i+1;j< arr.length;j++){

            //define temp variable which will be used in swapping array values so that we can sort
            let temp;
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log("Second smallest: "+arr[1]);
    console.log("Second largest: "+arr[arr.length - 2]);
}
getSecondLargestAndSmallest([2,10,4,154,95,123,45,99,12])