var button = document.createElement('button');
button.innerHTML = 'Generate Biome List';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = '9999';

document.body.appendChild(button);

button.addEventListener('click', function() {
  generate_custom_biome_list();
});
