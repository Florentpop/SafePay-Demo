import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

import { PayWithFlutterwave } from "flutterwave-react-native";
import uuid from "react-native-uuid";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

function PaymentScreen({ navigation, route }) {
  const transactionID = uuid.v4();

  const payAmount = route.params.data;
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.footer}>
        <KeyboardAwareScrollView style={styles.ontainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.amountText}>
              GH{"\u20B5"}
              {route.params.data}
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ModalPoup visible={visible}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.header}>
                  {/* Want to add Nav to Home Or History Screen */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("HistoryScreen", setVisible(false))
                    }
                  >
                    <Image
                      source={require("../../assets/x.png")}
                      style={{ height: 30, width: 30 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/success.png")}
                  style={{ height: 150, width: 150, marginVertical: 10 }}
                />
              </View>

              <Text
                style={{
                  marginVertical: 30,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Congratulations Your Payment was Successful
              </Text>
            </ModalPoup>

            {/*<Button title="Open Modal" onPress={() => setVisible(true)} /> */}
          </View>

          <PayWithFlutterwave
            onRedirect={(res) => {
              const status = res.status;
              if (status === "successful") {
                // Alert.alert(
                //   `Your Transaction with ID ${res.transaction_id} was Successful`
                // );
                setVisible(true);
              } else {
                return Alert.alert("Something Went Wrong");
              }
            }}
            options={{
              tx_ref: transactionID,
              authorization: "FLWPUBK_TEST-a232cbe6c1595c2d05c81e28624a905d-X",
              customer: {
                email: "safepay@gmail.com",
              },
              amount: payAmount,
              currency: "GHS",
              payment_options: "card",
            }}
            customButton={(props) => (
              <TouchableOpacity
                onPress={props.onPress}
                isBusy={props.isInitializing}
                disabled={false}
              >
                <View style={styles.btn}>
                  <View style={styles.confirmOpacity}>
                    <Text style={styles.confirmText}>
                      {/*Top Up {route.params.data}*/}
                      Make Payment
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </KeyboardAwareScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 40,
    //justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },

  contentContainer: {
    alignSelf: "center",
    height: 150,
    width: 300,
    //backgroundColor: "#00C598",
    borderRadius: 20,
    //elevation: 45,
    //shadowColor: "black",
    shadowColor: "grey",
    shadowOpacity: 0.27,
    shadowRadius: 10.65,
    //paddingTop: -80,
  },

  image: {
    alignSelf: "center",
    height: 150,
    width: 300,
    //backgroundColor: "#00C598",
    borderRadius: 15,
    //elevation: 45,
    overflow: "hidden",
  },

  contentContainer: {
    alignSelf: "center",
    height: 150,
    width: 300,
    //backgroundColor: "#DFA4E8",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#fff",

    borderRadius: 10,
    //elevation: 45,
    //shadowColor: "black",
    // shadowColor: "blue",
    //shadowOpacity: 5.27,
    //shadowRadius: 4.65,
  },

  amountText: {
    fontSize: 25,
    textAlign: "center",
    paddingTop: 55,
    fontWeight: "bold",
    color: "#fff",
  },

  confirmOpacity: {
    //backgroundColor: "#021639",
    color: "#fff",
    width: 170,
    height: 50,
    borderRadius: 25,

    alignSelf: "center",
    //marginTop: 105,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#fff",
  },

  confirmText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  header: {
    flex: 9,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 25,
    //paddingTop: 25,
  },

  text_header: {
    color: "#fff",
    //fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  footer: {
    flex: 8,
    //backgroundColor: "#fff",
    //borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 80,
    backgroundColor: "blue",
  },

  btn: {
    paddingTop: 195,
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    sum: state.total,
    transact: state.transactions,
  };
};

export default connect(mapStateToProps, null)(PaymentScreen);
