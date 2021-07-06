import { Color } from "./types.d.ts";

const fetchColors = async (): Promise<Color[]> => {
  try {
    const response = await fetch(
      "https://api.sampleapis.com/css-color-names/colors",
    );
    return await response.json();
  } catch (e) {
    console.error("Request failed");
    if (e instanceof Error) {
      console.error(e.message);
    }
    return [];
  }
};

export default fetchColors;
