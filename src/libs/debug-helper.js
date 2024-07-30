// file debug-helper.js
const _colorResetSuffix = '\x1b[0m';
const _colorErrorPrefix = '\x1b[41m';
const _colorHighlightPrefix = '\x1b[30m\x1b[43m';

let _debug = true; 

const  debugHelper = {
    isDebugEnabled: () => _debug,
    enableDebug: () => _debug = true,
    disableDebug: () => _debug = false
 };

 export { debugHelper } ; // a list of exported variables, function, etc.
 export function l() { // console.log with default
    //console.log.apply(console, arguments);
    //const c = console.log.bind(console);
    if(_debug)
        console.log.apply(console, arguments);
 }

export function w(message){ // console.log warn with yellow highlight
    if(_debug)
        console.log(_colorHighlightPrefix + message + _colorResetSuffix);
}

export function e(message){ // console.log error with red highlight
    if(_debug)
        console.log(_colorErrorPrefix + message + _colorResetSuffix);
}

 /*

 NOTE:
 https://javascript.info/import-export

 https://stackoverflow.com/questions/34714826/better-to-export-an-object-containing-function-or-just-export-multiple-function

Going forward, it's probably better to export multiple functions, as tree shaking allows module bundlers to eliminate dead code based on whether it's been imported or not.

If you export one large object, it's not always possible to use static analysis to tell which functions need to be kept and which can be safely discarded.

If you export multiple named functions, then the module bundler can analyze the AST then safely whitelist the functions which you are actually importing.
 */

/*

const x = 1;
const y = 2;
const z = 3;

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
); // The value of x is 1 and has been checked .. how many times?: 1

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
); // The value of x is 1 and has been checked .. how many times?: 2

console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
); // The value of y is 2 and has been checked .. how many times?: 1

console.log('\x1b[41m Welcome to the app! \x1b[0m');
console.log('\x1b[42m test! \x1b[0m');
console.log('\x1b[43m test2! \x1b[0m');
// https://davidlozzi.com/2021/03/16/style-up-your-console-logs/
console.log('\nI\'m the normal output')
console.log('\x1b[31mAnd now I\'m red!')
//strike-through?
console.log('Shoot, why am I still red?')
console.log('I need to \x1b[0mreset my console to get back to normal')
console.log('Colors \x1b[32mcan \x1b[33mchange \x1b[35min \x1b[36mthe \x1b[34msame \x1b[0mlog')
console.log('\x1b[1mBRIGHT colors \x1b[32mare \x1b[33mbolded \x1b[35mand \x1b[36mbrighter \x1b[0m')
console.log('\x1b[2mDIM colors \x1b[32mare \x1b[33mdarker \x1b[0m')
console.log('and of course, \x1b[41mwe have \x1b[30m\x1b[43mbackground colors\x1b[0m')
console.log('\x1b[7mReverse \x1b[32mswap \x1b[33mforeground \x1b[35mand \x1b[36mbackground\x1b[0m')
console.log('\x1b[8m\x1b[41mthis text \x1b[43mis hidden \x1b[42mbut the background\x1b[42m still comes \x1b[45mthrough\x1b[0m')
console.log('\x1b[4mgetting fancy with underlines \x1b[30m\x1b[3m\x1b[105mand italics\x1b[0m')
// In Node.js, you can print to the console without a trailing newline by using the process.stdout.write() method.

*/