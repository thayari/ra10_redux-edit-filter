import { CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_SERVICE, CANCEL_EDIT_SERVICE } from '../actions/actionTypes'

const initialState = {
  id: null,
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case ADD_SERVICE:
    case CANCEL_EDIT_SERVICE:
      return { ...initialState };

    case EDIT_SERVICE: {
      const { id, name, price } = action.payload;
      return { ...state, id, name, price };
    }

    default:
      return state;
  }
}