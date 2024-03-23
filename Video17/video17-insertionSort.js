const arr = [7, 14, 51, 24, 5, 71, 0, 1, 4, 2, 6, 8];

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const val = arr[i];
        const valNext = arr[i + 1];

        if (valNext < val) {
            arr[i + 1] = val;
            arr[i] = valNext;
        }

        for (let j = i; j !== 0; j--) {
            const currentValue = arr[j];
            const prevValue = arr[j - 1];

            if (currentValue < prevValue) {
                arr[j] = prevValue;
                arr[j - 1] = currentValue;
            }
        }
    }

    return arr;
}

console.log(insertionSort(arr));

