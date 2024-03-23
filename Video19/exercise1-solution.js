function getNumberOfAncestors(generation){
    if (generation === 1){
        return 2; //the cat has two parents
    } else{
        return 2 * getNumberOfAncestors(generation - 1);
    }
}

console.log(getNumberOfAncestors(2));