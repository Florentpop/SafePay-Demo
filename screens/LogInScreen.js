import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//export default function Login({ navigation }) {
const LogInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>SafePay</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              placeholder="Please Enter Your Email Here"
              style={styles.textInput}
              autoCapitalize="none"
            />

            <Feather name="check-circle" color="green" size={20} />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Please Enter Your password Here"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPres={() => {
              navigation.navigate("");
            }}
            style={styles.forgotPasswordOpacity}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <LinearGradient
              colors={["#48c6ef", "#6f86d6"]}
              style={styles.signIn}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={[styles.textSign, { color: "#fff" }]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.createAccountContainer}>
            <Text style={styles.haveAccount}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
              style={styles.createAccountOpacity}
            >
              <Text style={styles.createAccountText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B0FF",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 20,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountContainer: {
    flexDirection: "row",
    //flex: 1,
    paddingBottom: 18,
  },

  haveAccount: {
    marginLeft: 25,
    fontSize: 15,
    paddingTop: 30,
    justifyContent: "center",
  },

  createAccountText: {
    color: "#00d3ff",
    fontSize: 16,
    paddingTop: 30,
    justifyContent: "center",
  },
  forgotPasswordContainer: {
    //paddingTop: 25,
    //flex: 1.2,
  },

  forgotPasswordOpacity: {
    marginLeft: 165,
    //marginVertical: 3
    // marginTop:45,
  },

  forgotPasswordText: {
    color: "#00d3ff",
    fontSize: 13,
  },
});
