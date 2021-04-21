import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Select = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("merchandise");
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#4470da" />
      <View style={styles.type}>
        <Text style={styles.typeText}>What type of Transaction?</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 300, alignContent: "center" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Merchandise" value="merchandise" color="blue" />
          </Picker>
        </View>
      </View>

      <View style={styles.select}>
        <Text style={styles.whoText}>Who are you?</Text>
        <Text style={styles.selectText}>(select below)</Text>
      </View>

      <View style={styles.opacity}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details");
          }}
          style={styles.touchable1}
        >
          <Text style={styles.continueText}>Buyer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail");
          }}
          style={styles.touchable2}
        >
          <Text style={styles.continueText}>Seller</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    //alignItems: "center",
    justifyContent: "space-between",
  },

  type: {},

  typeText: {
    fontSize: 20,
    marginLeft: 20,
  },

  select: {
    flexDirection: "row",
    marginLeft: 20,
  },

  whoText: {
    fontSize: 20,
  },

  selectText: {
    fontSize: 14,
    paddingLeft: 8,
    paddingTop: 5,
    color: "grey",
  },

  picker: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    width: 300,
    marginLeft: 20,
  },

  opacity: {
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 50,
  },

  touchable1: {
    backgroundColor: "#00d3ff",
    height: 50,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 10,
  },

  touchable2: {
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
