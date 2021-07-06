import { Color } from "./types.d.ts";

const listColors = (colors: Color[]) => {
  if (colors.length === 0) {
    console.log("%cNo colors found", "color: red");
    return;
  }

  colors.map(
    (color: Color, index: number) => {
      console.log(`#${index}: %c${color.hex}\x1b[0m - ${color.name}`, `color: ${color.hex}`);
    },
  );
};

const output = (colors: Color[], search: string = "") => {
  const hasSearchQuery = search.length > 0;

  const filteredColors = hasSearchQuery
    ? colors.filter((color: Color) => color.name.includes(search))
    : colors;

  console.log(hasSearchQuery ? `Colors with "${search}":` : "All Colors:");
  listColors(filteredColors);
  console.log("\n");
  console.log(`Run 'colors <COLOR-NAME>' to search for color names.`);
};

export default output;
