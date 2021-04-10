import React from "react";
import { Provider } from "react-redux";
import store from "./src/components/redux/store";
import AppContainer from "./src/components/navigation/navigation";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
