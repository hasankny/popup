import {
  FONT_LIST,
  HEADLINE,
  DESCRIPTION,
  SUCCESSMESSAGE,
  STATUS,
} from "../actions/appAction";

const initialState = {
  headline: "",
  description: "",
  successMessage: "",
  status: false,
  fontList: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FONT_LIST:
      return { ...state, fontList: action.payload.fontList };
    case HEADLINE:
      return { ...state, headline: action.payload.headline };
    case DESCRIPTION:
      return { ...state, description: action.payload.description };
    case SUCCESSMESSAGE:
      return { ...state, successMessage: action.payload.successMessage };
    case STATUS:
      return { ...state, status: action.payload.status };
    default:
      return state;
  }
}
