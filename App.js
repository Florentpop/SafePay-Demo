import React from "react";
import { Provider } from "react-redux";
import store from "./src/components/redux/store";
import AppContainer from "./src/components/navigation/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
