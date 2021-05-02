import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/components/redux/store";
import AppContainer from "./src/components/navigation/navigation";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
