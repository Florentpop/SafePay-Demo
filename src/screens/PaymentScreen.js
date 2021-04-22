import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import RNWeb from "../screens/RNWeb";

function PaymentScreen({ navigation, route }) {
  const [momoUri, setMomoUri] = useState(null);

  function handleOnChangeText(text) {
    if (text.length === 10) {
      let data = {
        tx_ref: "AW-15" + (1000 + Math.floor(Math.random * 100000)),
        amount: "10",
        currency: "GHS",
        network: "MTN",
        email: "developerkupoe@gmail.com",
        phone_number: text,
        redirect_url: "https://codetraingh.com",
      };

      fetch("https://api.flutterwave.com/v3/charges?type=mobile_money_ghana", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer FLWSECK_TEST-bfd2a1388892054fe8d30fb79a926a69-X",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setMomoUri(data.meta.authorization.redirect);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  function closeWebView() {
    setMomoUri(null);
  }

  return (
    <View style={styles.parentContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.amountText}>
          GH{"\u20B5"}
          {route.params.data}
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Enter Mobile Money Number to Pay"
          onChangeText={handleOnChangeText}
          style={{
            backgroundColor: "lightgrey",
            fontSize: 18,
            textAlign: "center",
            borderRadius: 5,
            marginHorizontal: 30,
            height: 50,
            width: 300,
          }}
        />
        <Text style={{ textAlign: "center", paddingTop: 10, color: "grey" }}>
          (If you are seller, enter buyer's phone number)
        </Text>

        {momoUri !== null && (
          <RNWeb uri={momoUri} closeWebView={closeWebView} />
        )}
      </View>

      {/**  <View style={styles.confirmContainer}>
        <TouchableOpacity
          style={styles.confirmOpacity}
          onPress={() => {
            navigation.navigate("Alert");
          }}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  paymentText: {
    color: "#00d3ff",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 30,
  },

  totalAmount: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 300,
    alignSelf: "center",
  },
  contentContainer: {
    alignSelf: "center",
    height: 150,
    width: 300,
    backgroundColor: "#00C598",
    borderRadius: 10,
    elevation: 45,
    //shadowColor: "black",
    shadowColor: "grey",
    shadowOpacity: 0.27,
    shadowRadius: 10.65,
  },

  amountText: {
    fontSize: 25,
    textAlign: "center",
    paddingTop: 55,
    fontWeight: "bold",
    color: "#0f184b",
  },

  momoTextContainer: {
    alignSelf: "center",
  },

  momoText: {
    textAlign: "center",
    fontSize: 20,
  },

  input: {
    width: 300,
    height: 50,
    backgroundColor: "lightgrey",
    marginLeft: 30,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
  },

  picker: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    marginLeft: 30,
  },

  confirmOpacity: {
    backgroundColor: "#5CBE7D",
    width: 150,
    height: 50,
    borderRadius: 30,
    alignSelf: "center",
  },

  confirmText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    sum: state.total,
    transact: state.transactions,
  };
};

export default connect(mapStateToProps, null)(PaymentScreen);
