import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { loginEmailAccount } from "../components/redux/actions/authActions";

//export default function Login({ navigation }) {
class LogInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: "eye-off",
      email: "",
      password: "",
      showPassword: true,
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  changePasswordType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        eye: "show",
        showPassword: false,
        password: this.state.password,
      };
    } else {
      newState = {
        eye: "eye-off",
        showPassword: true,
        password: this.state.password,
      };
    }
    this.setState(newState);
  };

  handlePassword = (password) => {
    let newState = {
      eye: this.state.showPassword,
      password: password,
    };
    this.setState(newState);
    this.props.callback(password);
  };

  handleOnSubmit = () => {
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#5CBE7D" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>SafePay</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.footer}>
              {auth.error.login && (
                <Text style={{ color: "red" }}>{auth.error.login}</Text>
              )}

              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}>
                <Feather name="mail" color="#05375a" size={20} />
                <TextInput
                  placeholder="Please Enter Your Email Here"
                  keyboardType="email-address"
                  value={this.state.email}
                  onChangeText={(text) => {
                    this.handleUpdateState("email", text);
                  }}
                  style={styles.textInput}
                  autoCapitalize="none"
                />

                <Feather name="check-circle" color="green" size={20} />
              </View>

              <Text style={[styles.text_footer, { marginTop: 35 }]}>
                Password
              </Text>

              <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} />
                <TextInput
                  placeholder="Please Enter Your password Here"
                  value={this.state.password}
                  onChangeText={(text) => {
                    this.handleUpdateState("password", text);
                  }}
                  secureTextEntry={this.state.showPassword}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(text) => {
                    this.handleUpdateState("password", text);
                  }}
                />
                <TouchableOpacity onPress={this.changePasswordType}>
                  <Feather name="eye-off" color="grey" size={20} />
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
                  colors={["#5CBE7D", "#5CBE7D"]}
                  style={styles.signIn}
                >
                  <TouchableOpacity onPress={this.handleOnSubmit}>
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
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5CBE7D",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#6AF1F2",
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
    color: "#0f184b",
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
    color: "#0f184b",
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
    color: "pink",
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
    color: "pink",
    fontSize: 13,
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps, { loginEmailAccount })(LogInScreen);
