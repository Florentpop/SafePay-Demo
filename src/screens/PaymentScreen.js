import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

import { PayWithFlutterwave } from "flutterwave-react-native";
import uuid from "react-native-uuid";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";

function PaymentScreen({ navigation, route }) {
  const transactionID = uuid.v4();

  const payAmount = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*<Text style={styles.text_header}>Bringing the Gap of Trust</Text>*/}
      </View>
      <Animatable.View animation="fadeInLeft" style={styles.footer}>
        <KeyboardAwareScrollView style={styles.ontainer}>
          <ImageBackground
            source={require("../../assets/Safepay.png")}
            style={styles.image}
          >
            <Text style={styles.amountText}>
              GH{"\u20B5"}
              {route.params.data}
            </Text>
          </ImageBackground>

          <PayWithFlutterwave
            onRedirect={(res) => {
              const status = res.status;
              if (status === "successful") {
                Alert.alert(
                  `Your Transaction with ID ${res.transaction_id} was Successful`
                );
              } else {
                return Alert.alert("Something Went Wrong");
              }
            }}
            options={{
              tx_ref: transactionID,
              authorization: "FLWPUBK_TEST-a232cbe6c1595c2d05c81e28624a905d-X",
              customer: {
                email: "customer-email@example.com",
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
    backgroundColor: "#06C8F4",
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

  amountText: {
    fontSize: 25,
    textAlign: "center",
    paddingTop: 55,
    fontWeight: "bold",
    color: "#fff",
  },

  confirmOpacity: {
    backgroundColor: "#06C8F4",
    color: "#fff",
    width: 170,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
    //marginTop: 105,
  },

  confirmText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  header: {
    flex: 1,
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
    flex: 19,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 80,
  },

  btn: {
    paddingTop: 195,
  },
});

const mapStateToProps = (state) => {
  return {
    sum: state.total,
    transact: state.transactions,
  };
};

export default connect(mapStateToProps, null)(PaymentScreen);
