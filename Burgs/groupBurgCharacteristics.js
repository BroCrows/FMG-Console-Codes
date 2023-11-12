pack.burgs
  // Replace placeholder with desired characteristic.
  // Options are capital, port, citadel, walls, plaza(trade center), temple(religious center), shanty town
  .filter(b => b.cell && b.placeholder)
  // Replace forts with the name of the style group
  .forEach(b => moveBurgToGroup(b.i, 'forts'));
