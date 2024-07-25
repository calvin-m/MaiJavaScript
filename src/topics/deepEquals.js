export default function deepEquals(value1, value2) {
    if(value1 === null && value2 === null) return true;
    if(value1 === null || value2 === null) return false;

    const value1Type = typeof value1;
    const value2Type = typeof value2;
    //console.log("types: " + value1Type + ", " + value2Type);

    if(value1Type !== value2Type) return false;
    if(value1Type === "number" && isNaN(value1) 
        && value2Type === "number" && isNaN(value2)) return true; // special case of primitive type (since NaN is type of number)
                                                                // caution: isNaN("a string") => true!
    //=== 1. primitive types
    if(value1Type !== "object" && value2Type !== "object") {
        //console.log("Primitive type check: " + value1Type);
        return value1 === value2;
    }

    // ==== 2. object types ====
    // 2.1. array type
    if(Array.isArray(value1) && Array.isArray(value2)){
        if(value1.length !== value2.length) return false;

        for(let i=0; i < value1.length; i++){
            if(!deepEquals(value1[i], value2[i])) return false;
        }
        return true;
    }

    if(Array.isArray(value1) || Array.isArray(value2)) return false;

    // 2.2 object type
    const value1Keys = Object.keys(value1);
    const value2Keys = Object.keys(value2);

    if(value1Keys.length !== value2Keys.length) return false;

    if(!deepEquals(value1Keys, value2Keys)) return false;

    for(let j=0; j < value1Keys.length; j++){
        const key = value1Keys[j];
        const value1Value = value1[key];
        const value2Value = value2[key];
        if(!deepEquals(value1Value, value2Value)) return false;
    }

    return true;
}