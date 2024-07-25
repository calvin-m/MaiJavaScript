const mostCommonString = strings => {
    const commonStrings = {};

    strings.forEach(str => {
        if(commonStrings[str] === undefined){
            commonStrings[str] = 1;
        } else {
            commonStrings[str]++;
        }
    });

    //console.log(commonStrings);
    let maxEntry;
    let maxValue = 0;
    for(commonStr in commonStrings){
        if(commonStrings[commonStr] > maxValue){
            maxEntry = commonStr;
            maxValue = commonStrings[commonStr];
        }
    }
    return maxEntry;
};

const mostCommonStringAdvanced = (arr) => {
    const mapping = arr.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});

    // Object.entries will convert an object to an array of array
    // Ex: {a: 1, b: 2 } => [['a', 1], ['b', 2]]  
    return Object.entries(mapping).reduce(
        (acc, el) => el[1] > acc[1] ? el : acc, 
        [null, 0]
    )[0]; 
};

const inputStrings = ["a", "b", "c", "a", "woo"];

performance.mark("mostCommonString-start");
console.log(mostCommonString(inputStrings));
performance.mark("mostCommonString-end");
const measure1 = performance.measure("mostCommonString-start", "mostCommonString-end");
console.log(measure1);

performance.mark("mostCommonStringAdvanced-start");
console.log(mostCommonStringAdvanced(inputStrings));
performance.mark("mostCommonStringAdvanced-end");
const measure2 = performance.measure("mostCommonStringAdvanced-start", "mostCommonStringAdvanced-end");
console.log(measure2);

