const arr = [7, 14, 51, 24, 5, 71, 0, 1, 4, 2, 6, 8];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            // is greater than the next iteration
            if (arr[j + 1] < arr[j]) {
                // If the condition is true then swap them
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));