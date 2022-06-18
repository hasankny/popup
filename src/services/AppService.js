import axios from "axios";

export async function getFonts() {
  return await axios.get("https://apiv2.popupsmart.com/api/googlefont");
}