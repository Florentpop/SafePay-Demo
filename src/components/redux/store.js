import { createStore, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/authReducer";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/firebase";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
  )
);

let persistor = persistStore(store);

export { store, persistor };
