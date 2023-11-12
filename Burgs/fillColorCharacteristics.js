pack.burgs.forEach( b => {

if (!b.i) return;
// Replace placeholder with desired characteristic.
// Options are capital, port, citadel, walls, plaza(trade center), temple(religious center), shanty town
if (b.placeholder) { =

let x = burgIcons.select("#burg" + b.i);

if (x) {
// Replace color here. Default is blue
x.attr("fill", "blue");

}

}

});
