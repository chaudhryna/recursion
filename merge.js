function merge(leftHalf, rightHalf) {
    let finalArray = [];
    let lIndex = 0;
    let rIndex = 0;

    while(lIndex < leftHalf.length && rIndex < rightHalf.length){
        if(leftHalf[lIndex] < rightHalf[rIndex]){
            finalArray.push(leftHalf[lIndex]);
            lIndex++;
        } else {
            finalArray.push(rightHalf[rIndex]);
            rIndex++;
        }
    }
    return finalArray.concat(leftHalf.slice(lIndex)).concat(rightHalf.slice(rIndex));
}

function mergeSort(mergeArray) {
    if (mergeArray.length <= 1) {
        return mergeArray
    }
    const mid = Math.floor(mergeArray.length / 2);
    const leftHalf = mergeSort(mergeArray.slice(0, mid));
    const rightHalf = mergeSort(mergeArray.slice(mid));
    return merge(leftHalf, rightHalf);
}


// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));