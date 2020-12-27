import React from "react";
import "./styles.css";
import Counter from "./Components/Counter";
import { Provider } from "react-redux";

import store from "./stores/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
