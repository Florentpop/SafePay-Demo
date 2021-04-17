import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Select = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("merchandise", "buyer");
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#4470da" />
      <View style={styles.type}>
        <Text style={styles.typeText}>What type of Transaction?</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 330 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Merchandise" value="merchandise" color="blue" />
            <Picker.Item label="Other" value="other" color="gray" />
          </Picker>
        </View>
      </View>

      <View style={styles.select}>
        <Text style={styles.whoText}>Who are you?</Text>

        <View style={styles.picker}>
          <Picker
            textStyle={{ fontSize: 18 }}
            selectedValue={selectedValue}
            style={{
              height: 50,
              width: 330,
              borderWidth: 1,
              borderColor: "red",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Buyer" value="buyer" color="blue" />
            <Picker.Item label="Seller" value="seller" color="blue" />
          </Picker>
        </View>
      </View>

      <View style={styles.opacity}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details");
          }}
          style={styles.touchable}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },

  type: {
    flex: 1,
  },

  typeText: {
    fontSize: 20,
  },

  select: {
    flex: 2,
  },

  whoText: {
    fontSize: 20,
  },

  picker: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
  },

  opacity: {
    flex: 0.5,
  },

  touchable: {
    backgroundColor: "#00d3ff",
    height: 50,
    width: 150,
    borderRadius: 30,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 12,
    fontWeight: "bold",
  },
});

export default Select;
