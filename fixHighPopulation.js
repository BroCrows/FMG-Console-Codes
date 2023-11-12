pack.cells.pop = pack.cells.pop.map(function (entry) {
  if (entry > 10) {
   
    return Math.random() * 2 + 5.5;;
  } else {

    return entry;
  }
});

console.log(pack.cells.pop);
