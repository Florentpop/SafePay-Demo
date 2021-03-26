import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Details({ navigation }) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.buyingContainer}>
        <Text style={styles.buyingText}>What are you buying?</Text>

        <TextInput
          style={styles.inputText}
          placeholder="  eg. Television set"
        />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>What is the price? GH{"\u20B5"}</Text>

        <View style={styles.currencyContainer}>
          {/*<Text style={styles.currency}></Text>*/}
          <TextInput
            style={styles.inputTest}
            placeholder="1,800.00"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>Seller's phone number</Text>

        <TextInput
          style={styles.inputText}
          placeholder="02467278431"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Description</Text>

        <TextInput
          style={styles.inputTxt}
          placeholder=" "
          autoCorrect={true}
          editable={true}
          multiline={true}
          numberOfLines={2}
          maxLength={150}
        />
      </View>

      <View style={styles.opacityContainer}>
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => {
            navigation.navigate("Summary");
          }}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    //justifyContent: "center",
    padding: 15,
  },

  buyingContainer: {
    marginLeft: 30,
    paddingBottom: 15,
  },

  buyingText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  inputText: {
    backgroundColor: "lightgrey",
    height: 40,
    width: 280,
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 10,
  },

  priceContainer: {
    marginLeft: 30,
    paddingBottom: 15,
  },

  priceText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  currencyContainer: {
    flexDirection: "row",
  },

  currency: {
    fontSize: 18,
    paddingTop: 8,
  },

  inputTest: {
    backgroundColor: "lightgrey",
    height: 40,
    width: 280,
    borderRadius: 8,
    flexDirection: "row",
    paddingLeft: 10,
  },

  numberContainer: {
    marginLeft: 30,
    paddingBottom: 15,
  },

  numberText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  descriptionContainer: {
    marginLeft: 30,
    paddingBottom: 15,
  },

  descriptionText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputTxt: {
    backgroundColor: "lightgrey",
    height: 80,
    width: 280,
    borderRadius: 8,
    textAlignVertical: "top",
    fontSize: 15,
    paddingLeft: 10,
  },

  opacityContainer: {
    alignSelf: "center",
    marginVertical: 30
  },

  opacity: {
    backgroundColor: "#00d3ff",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});
