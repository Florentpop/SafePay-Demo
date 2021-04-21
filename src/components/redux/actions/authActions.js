import firebase from "../../firebase/firebase";

export function createEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut());
    } catch (error) {}
  };
}

export const addCustomer = (customer) => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    let user = getFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, customer.password);

    getFirestore()
      .collection("customers")
      .doc(user.user.uid)
      .set({
        name: customer.name,
        number: customer.number,
      })
      .value.then((doc) => {
        console.log(doc);
        alert("Customer Sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addSummary = (summary) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("summarys")
      .add({
        overAllPayment: summary.overAllPayment,
        companyName: summary.companyName,
        sellerNumber: summary.sellerNumber,
        itemName: summary.itemName,
        itemDescription: summary.itemDescription,
        createdAt: new Date(),
      })
      .then((doc) => {
        console.log(doc);
        //alert("Summary Sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedOut() {
  return {
    type: "LOGGED_OUT",
  };
}

export function registerError(error) {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
}

export function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
}

export function transactions(data) {
  return {
    type: "SEND_DATA",
    data: data,
  };
}

export function total(info) {
  return {
    type: "SEND_SUMMARY",
    info: info,
  };
}
