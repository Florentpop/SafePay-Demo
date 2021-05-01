import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AlertScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.alertText}>Alert!</Text>

        <Text style={styles.alertTxt}>
          Pending Buyer's confirmation &{"\n"}payment
        </Text>

        <TouchableOpacity
          style={styles.opacity}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={styles.okText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },

  contentContainer: {
    alignSelf: "center",
    width: 300,
    height: 250,
    backgroundColor: "#E4FFFE",
    elevation: 8,
  },

  alertText: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    color: "#0f184b",
  },

  alertTxt: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 40,
  },

  opacity: {
    width: 150,
    height: 50,
    backgroundColor: "#5CBE7D",
    alignSelf: "center",
    borderRadius: 30,
    //marginVertical: 25
  },

  okText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
  },
});
