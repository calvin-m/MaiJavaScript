import promiseAll from "./promiseAll.js";

const slowPromise = new Promise((res) => {
    setTimeout(() => res('done'), 1000);
});

const promises = [
    Promise.resolve(2),
    Promise.resolve('resolve'),
    //Promise.reject("error"),
    slowPromise
];

promiseAll(promises).then(console.log);