import fetchColors from "./fetch-colors.ts";
import output from "./output.ts";

const run = async () => {
  const { args: [colorName] } = Deno;

  const colors = await fetchColors();
  output(colors, colorName ?? "");
};

await run();
