//console.log(process.argv.slice(2))
let input = process.argv.slice(2).filter((element) => element > 0)
//console.log(input);
let timer = function(arg) {
  setTimeout(() => {process.stdout.write(".  ")}, arg*1000)
  }
  input.forEach(function(wait) {
  timer(wait);
})
