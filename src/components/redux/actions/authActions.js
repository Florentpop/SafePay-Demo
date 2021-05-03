import firebase from "../../firebase/firebase";

export function createEmailAccount(name, number, email, password) {
  return async (dispatch, { getFirestore }) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .firestore()
        .collection("customers")
        .doc(user.user.uid)
        .set({
          name: name,
          number: number,
        });
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
      // console.log(user);
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

{
  /*export const addCustomer = (customer) => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    let user = getFirebase()
      .auth()
      .createUserWithEmailAndPassword(customer.email, customer.password);

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
};*/
}

export const addSummary = (summary) => {
  console.log("add summary action", summary);
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("summarys")
      .add({
        overAllPayment: summary.overAllPayment,
        companyName: summary.companyName,
        sellerNumber: summary.sellerNumber,
        itemName: summary.itemName,
        itemDescription: summary.itemDescription,
        // uid: summary.uid,
        createdAt: new Date(),
      })
      .then(() => {
        //console.log("Summary called", summary);
        //alert("Summary Sent");
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(transactions(summary));
    dispatch({
      type: "ADD_SUMMARY",
      payload: summary,
    });
  };
};

export const getSummary = () => {
  return async (dispatch, state, { getFirestore }) => {
    try {
      const data = await getFirestore().collection("summarys").get();
      // .onSnapshot(
      //   (snapshot) => {
      //     var summarys = [];
      //     snapshot.forEach((data) => {
      //       summarys.push(data.data());
      //     });

      // console.log("firestore summary", data.data());
      dispatch(summarys(data.data()));
    } catch (error) {
      console.log(error.message);
    }
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

export function summary(data) {
  return {
    type: "RECEIVE_SUMMARY",
    data: data,
  };
}
