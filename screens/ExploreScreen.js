import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <StatusBar style="auto" />
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
