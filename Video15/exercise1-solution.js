//TASK: Find indexes of two values in the given array sum of those equals the desired value.
const inputArray = [7, 11, 15, 22];
const target = 18;

function calc(){
    let start = performance.now();
    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < inputArray.length; j++){
            if (i === j) continue;
            let v1 = inputArray[i];
            let v2 = inputArray[j];
            if (v1 + v2 === target){
                console.log(`Values are [${v1}, ${v2}]`);
                console.log(`Result is [${i}, ${j}]`);
                let timeTaken = performance.now() - start;
                console.log("Total time taken : " + timeTaken + " milliseconds");
                return;
            }
        }
    }
}

calc();