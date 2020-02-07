import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  LOADING_CONTACT
} from "../action/ActionType";
const initialState = {
  lists: [],
  loading: false
};
export const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, lists: action.payload, loading: false };

    case ADD_CONTACT:
      return { ...state, lists: [...state.lists,action.payload] };

    case DELETE_CONTACT:
      return {
        ...state,
        lists: state.lists.filter(el => el._id !== action.payload)
      };

    case EDIT_CONTACT:
      return { ...state, lists: [...state.lists.map(el=>el._id ===action.payload.id ? {...el,...action.paylod}:el)]}

    case LOADING_CONTACT:
      return { ...state, loading: true };

    default:
      return state;
  }
};
