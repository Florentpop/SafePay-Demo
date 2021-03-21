import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.universal} placeholder="First Name" />

        <TextInput style={styles.universal} placeholder="Last Name" />

        <TextInput
          style={styles.universal}
          //value={email}
          placeholder="Email Address"
        />

        <TextInput
          style={styles.passwordText}
          //value={text}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TextInput
          style={styles.passwordText}
          //value={text}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />

        <TextInput
          style={styles.universal}
          placeholder="Mobile Number"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.signUpOpacity}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.haveAccount}>You already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LogInScreen");
          }}
          style={styles.createAccountOpacity}
        >
          <Text style={styles.createAccountText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    backgroundColor: "#fff",
  },

  headingTextContainer: {
    //flex: 0.2,
    //flexGrow: 0.5,
    alignSelf: "auto",
  },

  headingText: {
    color: "#00d3ff",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 60,
    //marginVertical: 20
  },

  formContainer: {
    //flex: 2,
    // flexGrow: 2.5,
    paddingTop: 20,
    paddingLeft: 10,
    alignSelf: "auto",
  },

  universal: {
    width: 290,
    height: 42,
    fontSize: 15,
    backgroundColor: "#e7e9ea",
    marginLeft: 25,
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 15,
  },

  passwordText: {
    width: 290,
    height: 40,
    fontSize: 15,
    backgroundColor: "#e7e9ea",
    marginLeft: 25,
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 15,
  },

  signUpContainer: {
    //flex: 0.2,
    // flexGrow: 0.5,
    alignSelf: "auto",
    marginVertical: 25,
  },

  signUpOpacity: {
    backgroundColor: "#00d3ff",
    width: 120,
    height: 40,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 8,
  },

  signUpText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  createAccountContainer: {
    flexDirection: "row",
    // flex: 0.5,
    alignSelf: "center",
    // flexGrow: 0.3,
    marginTop: 20,
  },

  haveAccount: {
    marginLeft: 25,
    fontSize: 15,
  },

  createAccountText: {
    color: "#00d3ff",
    fontSize: 15,
  },
});
