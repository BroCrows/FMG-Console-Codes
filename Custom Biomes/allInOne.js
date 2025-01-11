(function() {
    // Core functions
    function generate_custom_biome(index, min_height, max_height, min_temp, max_temp, min_prec, max_prec) {
        var biome_count = 0;
        for (const i of pack.cells.i) {
            if (pack.cells.h[i] >= min_height && pack.cells.h[i] <= max_height &&
                grid.cells.temp[pack.cells.g[i]] >= min_temp && grid.cells.temp[pack.cells.g[i]] <= max_temp &&
                (grid.cells.prec[pack.cells.g[i]] * 100) >= min_prec && (grid.cells.prec[pack.cells.g[i]] * 100) <= max_prec) {
                pack.cells.biome[i] = index;
                biome_count = biome_count + 1;
            }
        }
        return biome_count;
    }

    function generate_custom_biome_list() {
        var index = 13;
        for (const i in custom_biome_list) {
            const min_height = custom_biome_list[i][3];
            const max_height = custom_biome_list[i][4];
            const min_temp = custom_biome_list[i][5];
            const max_temp = custom_biome_list[i][6];
            const min_prec = custom_biome_list[i][7];
            const max_prec = custom_biome_list[i][8];
            if (generate_custom_biome(index, min_height, max_height, min_temp, max_temp, min_prec, max_prec) > 0) {
                biomesData.name[index] = custom_biome_list[i][0];
                biomesData.color[index] = custom_biome_list[i][1];
                biomesData.habitability[index] = custom_biome_list[i][2];
                index = index + 1;
            }
        }
    }

    // Create the main toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Buttons';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.zIndex = '1000';
    document.body.appendChild(toggleButton);

    // Create the button list container
    const buttonList = document.createElement('div');
    buttonList.style.display = 'none';
    buttonList.style.position = 'fixed';
    buttonList.style.top = '50px';
    buttonList.style.right = '10px';
    buttonList.style.zIndex = '1000';
    buttonList.style.backgroundColor = 'white';
    buttonList.style.border = '1px solid #ccc';
    buttonList.style.padding = '10px';
    buttonList.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(buttonList);

    // Custom code lists for each button
    const customCodes = {
        'Schizoid': `
custom_biome_list = [
  ['Glaciers', '#f2f1ef', 0, 20, 69, -50, -1, 0, 9999],
  ['Polar deserts', '#f4eee1', 5, 20, 69, 0, 1, 0, 124],
  ['Subpolar deserts', '#f6ebd2', 10, 20, 69, 2, 3, 0, 124],
  ['Continental deserts', '#f7e9c4', 15, 20, 69, 4, 6, 0, 124],
  ['Oceanic deserts', '#f7e6b5', 20, 20, 69, 7, 12, 0, 124],
  ['Temperate deserts', '#f7e4a7', 25, 20, 69, 13, 17, 0, 124],
  ['Subtropical deserts', '#f6e199', 30, 20, 69, 18, 23, 0, 124],
  ['Tropical deserts', '#f4df8a', 25, 20, 69, 24, 30, 0, 124],
  ['Ultratropical deserts', '#f2dd7b', 20, 20, 69, 31, 50, 0, 124],
  ['Polar shrublands', '#dedacd', 40, 20, 69, 0, 1, 125, 9999],
  ['Subpolar shrublands', '#dfd7bf', 45, 20, 69, 2, 3, 125, 249],
  ['Continental shrublands', '#ded6b1', 50, 20, 69, 4, 6, 125, 249],
  ['Oceanic shrublands', '#ddd3a3', 55, 20, 69, 7, 12, 125, 249],
  ['Temperate shrublands', '#dcd195', 60, 20, 69, 13, 17, 125, 249],
  ['Subtropical shrublands', '#dacf87', 65, 20, 69, 18, 23, 125, 249],
  ['Tropical shrublands', '#d3ca76', 60, 20, 69, 24, 30, 125, 249],
  ['Ultratropical shrublands', '#cac664', 55, 20, 69, 31, 50, 125, 249],
  ['Subpolar grasslands', '#c8c4ac', 80, 20, 69, 2, 3, 250, 9999],
  ['Continental grasslands', '#c6c39f', 85, 20, 69, 4, 6, 250, 499],
  ['Oceanic grasslands', '#c4c191', 90, 20, 69, 7, 12, 250, 499],
  ['Temperate grasslands', '#c2bf84', 95, 20, 69, 13, 17, 250, 499],
  ['Subtropical grasslands', '#bfbd76', 100, 20, 69, 18, 23, 250, 499],
  ['Tropical grasslands', '#b2b663', 95, 20, 69, 24, 30, 250, 499],
  ['Ultratropical grasslands', '#a4af50', 90, 20, 69, 31, 50, 250, 499],
  ['Continental woodlands', '#afb08d', 80, 20, 69, 4, 6, 500, 9999],
  ['Oceanic woodlands', '#acae80', 85, 20, 69, 7, 12, 500, 999],
  ['Temperate woodlands', '#a8ad73', 90, 20, 69, 13, 17, 500, 999],
  ['Subtropical woodlands', '#a4ab66', 95, 20, 69, 18, 23, 500, 999],
  ['Tropical woodlands', '#92a252', 90, 20, 69, 24, 30, 500, 999],
  ['Ultratropical woodlands', '#7e983d', 85, 20, 69, 31, 50, 500, 999],
  ['Oceanic forests', '#949c70', 80, 20, 69, 7, 12, 1000, 9999],
  ['Temperate forests', '#8f9b64', 85, 20, 69, 13, 17, 1000, 1999],
  ['Subtropical forests', '#8a9a57', 90, 20, 69, 18, 23, 1000, 1999],
  ['Tropical forests', '#738e42', 85, 20, 69, 24, 30, 1000, 1999],
  ['Ultratropical forests', '#59812d', 80, 20, 69, 31, 50, 1000, 1999],
  ['Temperate rainforests', '#778955', 80, 20, 69, 13, 17, 2000, 9999],
  ['Subtropical rainforests', '#718849', 85, 20, 69, 18, 23, 2000, 3999],
  ['Tropical rainforests', '#547a33', 80, 20, 69, 24, 30, 2000, 3999],
  ['Ultratropical rainforests', '#346a1e', 75, 20, 69, 31, 50, 2000, 3999],
  ['Subtropical jungles', '#58773c', 80, 20, 69, 18, 23, 4000, 9999],
  ['Tropical jungles', '#366626', 75, 20, 69, 24, 30, 4000, 9999],
  ['Ultratropical jungles', '#005411', 70, 20, 69, 31, 50, 4000, 9999],
  ['Montane glaciers', '#fffefc', 0, 70, 100, -50, -1, 0, 9999],
  ['Montane polar deserts', '#fffdf0', 3, 70, 100, 0, 1, 0, 124],
  ['Montane subpolar deserts', '#fffbe3', 7, 70, 100, 2, 3, 0, 124],
  ['Montane continental deserts', '#fffbd7', 10, 70, 100, 4, 6, 0, 124],
  ['Montane oceanic deserts', '#fffaca', 13, 70, 100, 7, 12, 0, 124],
  ['Montane temperate deserts', '#fff9be', 17, 70, 100, 13, 17, 0, 124],
  ['Montane subtropical deserts', '#fff9b2', 20, 70, 100, 18, 23, 0, 124],
  ['Montane tropical deserts', '#fff9a5', 17, 70, 100, 24, 30, 0, 124],
  ['Montane ultratropical deserts', '#fff999', 13, 70, 100, 31, 50, 0, 124],
  ['Montane polar shrublands', '#f8f1dd', 27, 70, 100, 0, 1, 125, 9999],
  ['Montane subpolar shrublands', '#f5f0d1', 30, 70, 100, 2, 3, 125, 249],
  ['Montane continental shrublands', '#f3f0c5', 34, 70, 100, 4, 6, 125, 249],
  ['Montane oceanic shrublands', '#f2f0b9', 37, 70, 100, 7, 12, 125, 249],
  ['Montane temperate shrublands', '#f0efad', 40, 70, 100, 13, 17, 125, 249],
  ['Montane subtropical shrublands', '#efefa1', 44, 70, 100, 18, 23, 125, 249],
  ['Montane tropical shrublands', '#eaee92', 40, 70, 100, 24, 30, 125, 249],
  ['Montane ultratropical shrublands', '#e5ed83', 37, 70, 100, 31, 50, 125, 249],
  ['Montane subpolar grasslands', '#ebe6bf', 54, 70, 100, 2, 3, 250, 9999],
  ['Montane continental grasslands', '#e7e6b4', 57, 70, 100, 4, 6, 250, 499],
  ['Montane oceanic grasslands', '#e4e6a8', 60, 70, 100, 7, 12, 250, 499],
  ['Montane temperate grasslands', '#e1e69c', 64, 70, 100, 13, 17, 250, 499],
  ['Montane subtropical grasslands', '#dee691', 67, 70, 100, 18, 23, 250, 499],
  ['Montane tropical grasslands', '#d4e480', 64, 70, 100, 24, 30, 250, 499],
  ['Montane ultratropical grasslands', '#c9e170', 60, 70, 100, 31, 50, 250, 499],
  ['Montane continental woodlands', '#dbdca3', 54, 70, 100, 4, 6, 500, 9999],
  ['Montane oceanic woodlands', '#d5dc98', 57, 70, 100, 7, 12, 500, 999],
  ['Montane temperate woodlands', '#d0dd8d', 60, 70, 100, 13, 17, 500, 999],
  ['Montane subtropical woodlands', '#cbdd82', 64, 70, 100, 18, 23, 500, 999],
  ['Montane tropical woodlands', '#bcd96f', 60, 70, 100, 24, 30, 500, 999],
  ['Montane ultratropical woodlands', '#acd65e', 57, 70, 100, 31, 50, 500, 999],
  ['Montane oceanic forests', '#c6d388', 54, 70, 100, 7, 12, 1000, 9999],
  ['Montane temperate forests', '#bfd47d', 57, 70, 100, 13, 17, 1000, 1999],
  ['Montane subtropical forests', '#b8d473', 60, 70, 100, 18, 23, 1000, 1999],
  ['Montane tropical forests', '#a3cf60', 57, 70, 100, 24, 30, 1000, 1999],
  ['Montane ultratropical forests', '#8bca4e', 54, 70, 100, 31, 50, 1000, 1999],
  ['Montane temperate rainforests', '#adcb6f', 54, 70, 100, 13, 17, 2000, 9999],
  ['Montane subtropical rainforests', '#a4cc66', 57, 70, 100, 18, 23, 2000, 3999],
  ['Montane tropical rainforests', '#88c552', 54, 70, 100, 24, 30, 2000, 3999],
  ['Montane ultratropical rainforests', '#67bf41', 50, 70, 100, 31, 50, 2000, 3999],
  ['Montane subtropical jungles', '#8fc359', 54, 70, 100, 18, 23, 4000, 9999],
  ['Montane tropical jungles', '#6abb46', 50, 70, 100, 24, 30, 4000, 9999],
  ['Montane ultratropical jungles', '#36b336', 47, 70, 100, 31, 50, 4000, 9999]
];
generate_custom_biome_list()`,
        'Schozoid Plus': `
custom_biome_list = [
    ['Glaciers', '#f2f1ef', 0, 20, 100, -128, -1, 0, 100000],
    ['Polar Deserts', '#f4eee1', 5, 20, 49, 0, 1, 0, 100],
    ['Subpolar Deserts', '#f6ebd2', 10, 20, 49, 2, 3, 0, 100],
    ['Continental Deserts', '#f7e9c4', 15, 20, 49, 4, 6, 0, 100],
    ['Oceanic Deserts', '#f7e6b5', 20, 20, 49, 7, 12, 0, 100],
    ['Temperate Deserts', '#f7e4a7', 25, 20, 49, 13, 17, 0, 100],
    ['Subtropical Deserts', '#f6e199', 30, 20, 49, 18, 23, 0, 100],
    ['Tropical Deserts', '#f4df8a', 25, 20, 49, 24, 30, 0, 100],
    ['Ultratropical Deserts', '#f2dd7b', 20, 20, 49, 31, 50, 0, 100],
    ['Polar Shrublands', '#dedacd', 40, 20, 49, 0, 1, 200, 100000],
    ['Subpolar Shrublands', '#dfd7bf', 45, 20, 49, 2, 3, 200, 300],
    ['Continental Shrublands', '#ded6b1', 50, 20, 49, 4, 6, 200, 300],
    ['Oceanic Shrublands', '#ddd3a3', 55, 20, 49, 7, 12, 200, 300],
    ['Temperate Shrublands', '#dcd195', 60, 20, 49, 13, 17, 200, 300],
    ['Subtropical Shrublands', '#dacf87', 65, 20, 49, 18, 23, 200, 300],
    ['Tropical Shrublands', '#d3ca76', 60, 20, 49, 24, 30, 200, 300],
    ['Ultratropical Shrublands', '#cac664', 55, 20, 49, 31, 50, 200, 300],
    ['Subpolar Grasslands', '#c8c4ac', 80, 20, 49, 2, 3, 400, 100000],
    ['Continental Grasslands', '#c6c39f', 85, 20, 49, 4, 6, 400, 500],
    ['Oceanic Grasslands', '#c4c191', 90, 20, 49, 7, 12, 400, 500],
    ['Temperate Grasslands', '#c2bf84', 95, 20, 49, 13, 17, 400, 500],
    ['Subtropical Grasslands', '#bfbd76', 100, 20, 49, 18, 23, 400, 500],
    ['Tropical Grasslands', '#b2b663', 95, 20, 49, 24, 30, 400, 500],
    ['Ultratropical Grasslands', '#a4af50', 90, 20, 49, 31, 50, 400, 500],
    ['Continental Woodlands', '#afb08d', 80, 20, 49, 4, 6, 600, 100000],
    ['Oceanic Woodlands', '#acae80', 85, 20, 49, 7, 12, 600, 900],
    ['Temperate Woodlands', '#a8ad73', 90, 20, 49, 13, 17, 600, 900],
    ['Subtropical Woodlands', '#a4ab66', 95, 20, 49, 18, 23, 600, 900],
    ['Tropical Woodlands', '#92a252', 90, 20, 49, 24, 30, 600, 900],
    ['Ultratropical Woodlands', '#7e983d', 85, 20, 49, 31, 50, 600, 900],
    ['Oceanic Forests', '#949c70', 80, 20, 49, 7, 12, 1000, 100000],
    ['Temperate Forests', '#8f9b64', 85, 20, 49, 13, 17, 1000, 1900],
    ['Subtropical Forests', '#8a9a57', 90, 20, 49, 18, 23, 1000, 1900],
    ['Tropical Forests', '#738e42', 85, 20, 49, 24, 30, 1000, 1900],
    ['Ultratropical Forests', '#59812d', 80, 20, 49, 31, 50, 1000, 1900],
    ['Temperate Rainforests', '#778955', 80, 20, 49, 13, 17, 2000, 100000],
    ['Subtropical Rainforests', '#718849', 85, 20, 49, 18, 23, 2000, 4000],
    ['Tropical Rainforests', '#547a33', 80, 20, 49, 24, 30, 2000, 4000],
    ['Ultratropical Rainforests', '#346a1e', 75, 20, 49, 31, 50, 2000, 4000],
    ['Subtropical Jungles', '#58773c', 80, 20, 49, 18, 23, 2000, 100000],
    ['Tropical Jungles', '#366626', 75, 20, 49, 24, 30, 2000, 100000],
    ['Ultratropical Jungles', '#005411', 70, 20, 49, 31, 50, 2000, 100000],
    ['Hilly Glaciers', '#f2f1ef', 0, 50, 69, -128, -1, 0, 100000],
    ['Hilly Polar Deserts', '#f4eee1', 3, 50, 69, 0, 1, 0, 100],
    ['Hilly Subpolar Deserts', '#f6ecd3', 7, 50, 69, 2, 3, 0, 100],
    ['Hilly Continental Deserts', '#f7eac5', 10, 50, 69, 4, 6, 0, 100],
    ['Hilly Oceanic Deserts', '#f8e7b6', 13, 50, 69, 7, 12, 0, 100],
    ['Hilly Temperate Deserts', '#f8e6a9', 17, 50, 69, 13, 17, 0, 100],
    ['Hilly Subtropical Deserts', '#f7e39b', 20, 50, 69, 18, 23, 0, 100],
    ['Hilly Tropical Deserts', '#f5e28d', 17, 50, 69, 24, 30, 0, 100],
    ['Hilly Ultratropical Deserts', '#f4e07f', 13, 50, 69, 31, 50, 0, 100],
    ['Hilly Polar Shrublands', '#e2ddcf', 27, 50, 69, 0, 1, 200, 100000],
    ['Hilly Subpolar Shrublands', '#e2dbc2', 30, 50, 69, 2, 3, 200, 300],
    ['Hilly Continental Shrublands', '#e1dab4', 34, 50, 69, 4, 6, 200, 300],
    ['Hilly Oceanic Shrublands', '#e1d8a7', 37, 50, 69, 7, 12, 200, 300],
    ['Hilly Temperate Shrublands', '#e0d79a', 40, 50, 69, 13, 17, 200, 300],
    ['Hilly Subtropical Shrublands', '#ded68c', 44, 50, 69, 18, 23, 200, 300],
    ['Hilly Tropical Shrublands', '#d8d27c', 40, 50, 69, 24, 30, 200, 300],
    ['Hilly Ultratropical Shrublands', '#d0cf6b', 37, 50, 69, 31, 50, 200, 300],
    ['Hilly Subpolar Grasslands', '#d1ccb1', 54, 50, 69, 2, 3, 400, 100000],
    ['Hilly Continental Grasslands', '#cfcca4', 57, 50, 69, 4, 6, 400, 500],
    ['Hilly Oceanic Grasslands', '#cdcb97', 60, 50, 69, 7, 12, 400, 500],
    ['Hilly Temperate Grasslands', '#cbca8b', 64, 50, 69, 13, 17, 400, 500],
    ['Hilly Subtropical Grasslands', '#c8c97e', 67, 50, 69, 18, 23, 400, 500],
    ['Hilly Tropical Grasslands', '#bdc56c', 64, 50, 69, 24, 30, 400, 500],
    ['Hilly Ultratropical Grasslands', '#b0c05b', 60, 50, 69, 31, 50, 400, 500],
    ['Hilly Continental Woodlands', '#bebf95', 54, 50, 69, 4, 6, 600, 100000],
    ['Hilly Oceanic Woodlands', '#bbbf89', 57, 50, 69, 7, 12, 600, 900],
    ['Hilly Temperate Woodlands', '#b7bf7d', 60, 50, 69, 13, 17, 600, 900],
    ['Hilly Subtropical Woodlands', '#b3be71', 64, 50, 69, 18, 23, 600, 900],
    ['Hilly Tropical Woodlands', '#a3b85e', 60, 50, 69, 24, 30, 600, 900],
    ['Hilly Ultratropical Woodlands', '#91b24b', 57, 50, 69, 31, 50, 600, 900],
    ['Hilly Oceanic Forests', '#a9b47a', 54, 50, 69, 7, 12, 1000, 100000],
    ['Hilly Temperate Forests', '#a4b46f', 57, 50, 69, 13, 17, 1000, 1900],
    ['Hilly Subtropical Forests', '#9fb464', 60, 50, 69, 18, 23, 1000, 1900],
    ['Hilly Tropical Forests', '#8aad50', 57, 50, 69, 24, 30, 1000, 1900],
    ['Hilly Ultratropical Forests', '#71a43d', 54, 50, 69, 31, 50, 1000, 1900],
    ['Hilly Temperate Rainforests', '#92aa62', 54, 50, 69, 13, 17, 2000, 100000],
    ['Hilly Subtropical Rainforests', '#8bab58', 57, 50, 69, 18, 23, 2000, 4000],
    ['Hilly Tropical Rainforests', '#6fa143', 54, 50, 69, 24, 30, 2000, 4000],
    ['Hilly Ultratropical Rainforests', '#509831', 50, 50, 69, 31, 50, 2000, 4000],
    ['Hilly Subtropical Jungles', '#76a14c', 54, 50, 69, 18, 23, 2000, 100000],
    ['Hilly Tropical Jungles', '#549638', 50, 50, 69, 24, 30, 2000, 100000],
    ['Hilly Ultratropical Jungles', '#1f8b27', 47, 50, 69, 31, 50, 2000, 100000],
    ['Montane Glaciers', '#fffefc', 0, 70, 100, -128, -1, 0, 100000],
    ['Montane Polar Deserts', '#fffdf0', 1, 70, 100, 0, 1, 0, 100],
    ['Montane Subpolar Deserts', '#fffbe3', 5, 70, 100, 2, 3, 0, 100],
    ['Montane Continental Deserts', '#fffbd7', 8, 70, 100, 4, 6, 0, 100],
    ['Montane Oceanic Deserts', '#fffaca', 11, 70, 100, 7, 12, 0, 100],
    ['Montane Temperate Deserts', '#fff9be', 15, 70, 100, 13, 17, 0, 100],
    ['Montane Subtropical Deserts', '#fff9b2', 18, 70, 100, 18, 23, 0, 100],
    ['Montane Tropical Deserts', '#fff9a5', 15, 70, 100, 24, 30, 0, 100],
    ['Montane Ultratropical Deserts', '#fff999', 11, 70, 100, 31, 50, 0, 100],
    ['Montane Polar Shrublands', '#f8f1dd', 25, 70, 100, 0, 1, 200, 100000],
    ['Montane Subpolar Shrublands', '#f5f0d1', 28, 70, 100, 2, 3, 200, 300],
    ['Montane Continental Shrublands', '#f3f0c5', 32, 70, 100, 4, 6, 200, 300],
    ['Montane Oceanic Shrublands', '#f2f0b9', 35, 70, 100, 7, 12, 200, 300],
    ['Montane Temperate Shrublands', '#f0efad', 38, 70, 100, 13, 17, 200, 300],
    ['Montane Subtropical Shrublands', '#efefa1', 42, 70, 100, 18, 23, 200, 300],
    ['Montane Tropical Shrublands', '#eaee92', 38, 70, 100, 24, 30, 200, 300],
    ['Montane Ultratropical Shrublands', '#e5ed83', 35, 70, 100, 31, 50, 200, 300],
    ['Montane Subpolar Grasslands', '#ebe6bf', 52, 70, 100, 2, 3, 400, 100000],
    ['Montane Continental Grasslands', '#e7e6b4', 55, 70, 100, 4, 6, 400, 500],
    ['Montane Oceanic Grasslands', '#e4e6a8', 58, 70, 100, 7, 12, 400, 500],
    ['Montane Temperate Grasslands', '#e1e69c', 62, 70, 100, 13, 17, 400, 500],
    ['Montane Subtropical Grasslands', '#dee691', 65, 70, 100, 18, 23, 400, 500],
    ['Montane Tropical Grasslands', '#d4e480', 62, 70, 100, 24, 30, 400, 500],
    ['Montane Ultratropical Grasslands', '#c9e170', 58, 70, 100, 31, 50, 400, 500],
    ['Montane Continental Woodlands', '#dbdca3', 52, 70, 100, 4, 6, 600, 100000],
    ['Montane Oceanic Woodlands', '#d5dc98', 55, 70, 100, 7, 12, 600, 900],
    ['Montane Temperate Woodlands', '#d0dd8d', 58, 70, 100, 13, 17, 600, 900],
    ['Montane Subtropical Woodlands', '#cbdd82', 62, 70, 100, 18, 23, 600, 900],
    ['Montane Tropical Woodlands', '#bcd96f', 58, 70, 100, 24, 30, 600, 900],
    ['Montane Ultratropical Woodlands', '#acd65e', 55, 70, 100, 31, 50, 600, 900],
    ['Montane Oceanic Forests', '#c6d388', 52, 70, 100, 7, 12, 1000, 100000],
    ['Montane Temperate Forests', '#bfd47d', 55, 70, 100, 13, 17, 1000, 1900],
    ['Montane Subtropical Forests', '#b8d473', 58, 70, 100, 18, 23, 1000, 1900],
    ['Montane Tropical Forests', '#a3cf60', 55, 70, 100, 24, 30, 1000, 1900],
    ['Montane Ultratropical Forests', '#8bca4e', 52, 70, 100, 31, 50, 1000, 1900],
    ['Montane Temperate Rainforests', '#adcb6f', 52, 70, 100, 13, 17, 2000, 100000],
    ['Montane Subtropical Rainforests', '#a4cc66', 55, 70, 100, 18, 23, 2000, 4000],
    ['Montane Tropical Rainforests', '#88c552', 52, 70, 100, 24, 30, 2000, 4000],
    ['Montane Ultratropical Rainforests', '#67bf41', 48, 70, 100, 31, 50, 2000, 4000],
    ['Montane Subtropical Jungles', '#8fc359', 52, 70, 100, 18, 23, 2000, 100000],
    ['Montane Tropical Jungles', '#6abb46', 48, 70, 100, 24, 30, 2000, 100000],
    ['Montane Ultratropical Jungles', '#36b336', 45, 70, 100, 31, 50, 2000, 100000]
];
generate_custom_biome_list()`,
        'Height': `
custom_biome_list = [
  ['Plains', '#00ff00', 100, 20, 45, -128, 50, 0, 100000],
  ['Hills', '#ffff00', 67, 46, 65, -128, 50, 0, 100000],
  ['Mountains', '#ff0000', 33, 66, 100, -128, 50, 0, 100000]
];
generate_custom_biome_list()`,
        'Precipitation': `
custom_biome_list = [
  ['Deserts', '#f2dd7b', 0, 20, 100, -128, 50, 0, 100],
  ['Shrublands', '#cac664', 14, 20, 100, -128, 50, 200, 300],
  ['Grasslands', '#a4af50', 28, 20, 100, -128, 50, 400, 500],
  ['Woodlands', '#7e983d', 42, 20, 100, -128, 50, 600, 1000],
  ['Forests', '#59812d', 56, 20, 100, -128, 50, 1100, 2000],
  ['Rainforests', '#346a1e', 70, 20, 100, -128, 50, 2100, 4000],
  ['Jungles', '#005411', 85, 20, 100, -128, 50, 4100, 100000]
];
generate_custom_biome_list()`,
        'Temperature': `
custom_biome_list = [
  ['Polar', '#dedacd', 0, 20, 100, -128, 1, 0, 100000],
  ['Subpolar', '#c8c4ac', 14, 20, 100, 2, 3, 0, 100000],
  ['Continental', '#afb08d', 28, 20, 100, 4, 6, 0, 100000],
  ['Oceanic', '#949c70', 42, 20, 100, 7, 12, 0, 100000],
  ['Temperate', '#778955', 56, 20, 100, 13, 17, 0, 100000],
  ['Subtropical', '#58773c', 70, 20, 100, 18, 23, 0, 100000],
  ['Tropical', '#366626', 85, 20, 100, 24, 30, 0, 100000],
  ['Ultratropical', '#005411', 100, 20, 100, 31, 50, 0, 100000]
];
generate_custom_biome_list()`
    };

    // Function to create a button
    function createButton(name) {
        const button = document.createElement('button');
        button.innerText = name;
        button.style.display = 'block';
        button.style.width = '100%';
        button.style.marginBottom = '5px';
        button.onclick = function() {
            eval(customCodes[name]);
        };
        buttonList.appendChild(button);
    }

    // Create the buttons
    const buttonNames = ['Schizoid', 'Schozoid Plus', 'Height', 'Precipitation', 'Temperature'];
    buttonNames.forEach(createButton);

    // Toggle button list visibility
    toggleButton.onclick = function() {
        buttonList.style.display = buttonList.style.display === 'none' ? 'block' : 'none';
    };
})();
