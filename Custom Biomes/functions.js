function generate_custom_biome(index, min_height, max_height, min_temp, max_temp, min_prec, max_prec) {
  var biome_count = 0;
  for (const i of pack.cells.i) {
    if (pack.cells.h[i] >= min_height && pack.cells.h[i] <= max_height && grid.cells.temp[pack.cells.g[i]] >= min_temp && grid.cells.temp[pack.cells.g[i]] <= max_temp && (grid.cells.prec[pack.cells.g[i]] * 100) >= min_prec && (grid.cells.prec[pack.cells.g[i]] * 100) <= max_prec) {
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
