//console.log(process.argv.slice(2))
let input = process.argv.slice(2).filter((element) => element > 0)

input.forEach((num, i, arr) => {
  setTimeout(() => {
    process.stdout.write('.')
    if (arr.length - 1 - i == 0) {
      console.log("")
    }
  }, num * 1000);
});

//console.log(input);
// let timer = function(seconds, callback) {
//   setTimeout(function() {
//     process.stdout.write(".   ")
//     callback();
//   }, seconds*1000)
//     // console.log(numLeft)
//     // if (numLeft == 0) {
//       // process.stdout.write('\n')
// };

// input.forEach(function(num) {
//   timer(num, function() { console.log() } )
// });

// document.write('\n');

// let timer = function(seconds, numLeft) {
//   setTimeout(function() {
//     process.stdout.write(".   ")}, seconds*1000)
//     process.stdout.write('\n')
//     console.log(numLeft)
//     if (numLeft == 0) {
//       // process.stdout.write('\n')
//     }
// };
// input.forEach(function(num, i, arr) {
//   timer(num, arr.length - 1 - i);
// });

// document.write('\n');