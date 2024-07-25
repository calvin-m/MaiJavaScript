export default function promiseAll(promises) {
    const outputs = [];
    let settledPromisesCounter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((value) => {
                outputs[i] = value;
                settledPromisesCounter++;
                if(settledPromisesCounter === promises.length){
                    resolve(outputs);
                }
            })
            .catch(reject);
        });
    });
}