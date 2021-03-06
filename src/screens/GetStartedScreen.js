import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.parentContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 230, height: 230 }}
          source={require("../../assets/images/safe.jpg")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.getStartedText}>
          We hold the buyer's funds and disburse it to the seller once the goods
          or services are delivered. We ensure that the buyer gets what they
          have paid for and the seller gets paid on time, every time.
        </Text>
      </View>

      <View style={styles.getStartedContainer}>
        <TouchableOpacity
          style={styles.getStartedOpacity}
          onPress={() => {
            navigation.navigate("Select");
          }}
        >
          <Text style={styles.getStarted}>Start Escrow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  textContainer: {},

  getStartedText: {
    color: "gray",
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    marginBottom: 15,
  },

  getStartedContainer: {
    paddingBottom: 90,
  },

  getStartedOpacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  getStarted: {
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
    fontSize: 16,
  },
});
