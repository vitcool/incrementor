const INCREMENT = "/tasks/INCREMENT";
const DECREMENT = "/tasks/DECREMENT";

const initialState = {
  number: 0
};

//actions
export const incrementAction = () => {
  return {
    type: INCREMENT
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT
  };
};

//reducer
const task = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return increment(state);
    case DECREMENT:
      return decrement(state);

    default:
      return state;
  }
};

//helpers
const increment = state => {
  return { number: state.number + 1 };
};

const decrement = state => {
  return { number: state.number - 1 };
};

export default task;
