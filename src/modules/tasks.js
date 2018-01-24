import { createActions, handleActions } from "redux-actions";

const initialState = {
  number: 0
};

//actions
export const { increment, decrement, incrementSuccess } = createActions(
  "INCREMENT",
  "DECREMENT",
  "INCREMENT_SUCCESS"
);

//reducer
const reducer = handleActions(
  {
    [increment](state) {
      return { number: state.number + 1 };
    },
    [decrement](state) {
      return { number: state.number - 1 };
    },
    [incrementSuccess](state, data) {
      debugger;
      return { number: state.number + 1 };
    }
  },
  initialState
);

export default reducer;
