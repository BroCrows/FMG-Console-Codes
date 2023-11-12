const avg = pack.cells.pop.reduce((sum,value) => sum + value, 0) / pack.cells.pop.length;
// You can modulate the "2" to set your preferred threshold
pack.cells.pop = pack.cells.pop.map(function (entry) {
  if (entry > (avg*2)) {
// You can modulate the "0.5" and "2" parameters to adjust your preferred randomness   
    return Math.random() * (avg * 0.5) + (avg * 2);;
  } else {

    return entry;
  }
});;
