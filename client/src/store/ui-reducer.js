import { SET_PROCESSING, SET_UI, SET_ERROR } from '../settings/constants';

const initialState = {
  processing: false,
  error: '',
  errorStatus: null,
  pages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROCESSING:
      return { ...state, processing: action.payload };
    case SET_UI: // TO BE CONTINUED...
      return { ...state, pages: action.payload, processing: false };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.message,
        errorStatus: action.payload.response.status,
        processing: false,
      };
    default:
      return state;
  }
};
