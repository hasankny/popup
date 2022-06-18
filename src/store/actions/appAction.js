// ** Third Party Components
import sortBy from "array-sort-by";

import { getFonts } from "../../services/AppService";

export const FONT_LIST = "FONT_LIST";
export const HEADLINE = "HEADLINE";
export const DESCRIPTION = "DESCRIPTION";
export const SUCCESSMESSAGE = "SUCCESSMESSAGE";
export const STATUS = "STATUS";

export function setFontList(param) {
  return {
    type: FONT_LIST,
    payload: {
      fontList: param,
    },
  };
}

export function getFontList() {
  return (dispatch) => {
    return new Promise(() => {
      getFonts()
        .then((response) => response.data)
        .then((data) => {
          const filteredFont = data.filter((x) => x.category !== "monospace");
          sortBy(filteredFont, (item) => item.family);
          dispatch(setFontList(filteredFont));
        });
    });
  };
}

export function setHeadline(param) {
  return {
    type: HEADLINE,
    payload: {
      headline: param,
    },
  };
}

export function setDescription(param) {
  return {
    type: DESCRIPTION,
    payload: {
      description: param,
    },
  };
}

export function setSuccessMessage(param) {
  return {
    type: SUCCESSMESSAGE,
    payload: {
      successMessage: param,
    },
  };
}

export function setStatus(param) {
  return {
    type: STATUS,
    payload: {
      status: param,
    },
  };
}
