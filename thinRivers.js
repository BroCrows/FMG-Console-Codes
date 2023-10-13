// You can change numbers to increase width or widdening of the river
pack.rivers.forEach(r => r.widthFactor=0.0)
pack.rivers.forEach(r => r.sourceWidth=0.5)

// Button to make life easier
var buttonThinRivers = document.createElement('button');
buttonThinRivers.innerHTML = 'Thin Rivers';
buttonThinRivers.style.position = 'fixed';
buttonThinRivers.style.top = '10px';
buttonThinRivers.style.right = '10px';
buttonThinRivers.style.zIndex = '9999';

document.body.appendChild(buttonThinRivers);

buttonThinRivers.addEventListener('click', function() {
  pack.rivers.forEach(r => {
    // Here are the numbers you can change
    r.widthFactor = 0.5;
    r.sourceWidth = 0.5;
  });
});
