import { createStore } from "redux";

const initialCount = {
  count: 0
};

function countReducer(state = initialCount, action) {
  switch (action.type) {
    case "Increment":
      return state.count + 1;
    case "decrement":
      return state.count - 1;
    default:
      break;
  }
}

var store = createStore(countReducer);
export default store;
