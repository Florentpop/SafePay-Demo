import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const EditProfileScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4470da" />
      <Text>Edit Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
