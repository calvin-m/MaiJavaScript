const findVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];

    // 2. Advanced Implementation with reduce
    return str
        .toLowerCase()
        .split('')
        .reduce((acc, char) => vowels.includes(char) ? acc+1 : acc, 0);

    // 1. Basic Implementattion
    // let count = 0;
    // for(let char of str.toLowerCase()){
    //     if(vowels.includes(char)){
    //         count++;
    //     }
    // }
    // return count;
};

console.log(findVowels("addgregwo"));