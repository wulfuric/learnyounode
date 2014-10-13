var total = 0;
process.argv.forEach(function (val, index, array) {
  if (index >= 2){
    total = total + (+val);
  }
});

console.log(total);
