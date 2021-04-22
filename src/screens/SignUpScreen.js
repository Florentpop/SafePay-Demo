import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import {
  createEmailAccount,
  registerError,
} from "../../src/components/redux/actions/authActions";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      number: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Passwords do not match");
      return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password);
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
          <StatusBar backgroundColor="#00B0FF" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Now</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.footer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {auth.error.register && (
                  <Text style={{ color: "red" }}>{auth.error.register}</Text>
                )}

                <Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Full Name Here"
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={(text) => {
                      this.handleUpdateState("name", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Email
                </Text>
                <View style={styles.action}>
                  <Feather name="mail" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Enter Your Email Here"
                    keyboardType="email-address"
                    value={this.state.email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("email", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Enter Your password Here"
                    value={this.state.password}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("password", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Confirm Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Confirm Your Password Here"
                    value={this.state.confirm}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("confirm", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Mobile Number
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="mobile" color="#05375a" size={25} />
                  <TextInput
                    placeholder="Please Enter Your Mobile Number Here"
                    value={this.state.number}
                    keyboardType="number-pad"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("number", text);
                    }}
                  />
                </View>

                <View style={styles.button}>
                  <LinearGradient
                    colors={["#48c6ef", "#6f86d6"]}
                    style={styles.signIn}
                  >
                    <TouchableOpacity onPress={this.handleOnSubmit}>
                      <Text style={[styles.textSign, { color: "#fff" }]}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View style={styles.createAccountContainer}>
                  <Text style={styles.haveAccount}>
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("LogInScreen");
                    }}
                    style={styles.createAccountOpacity}
                  >
                    <Text style={styles.createAccountText}>SignIn</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
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
    backgroundColor: "#00B0FF",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    //paddingBottom: 20,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
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
    paddingBottom: 15,
  },

  haveAccount: {
    marginLeft: 25,
    fontSize: 15,
    paddingTop: 19,
    justifyContent: "center",
  },

  createAccountText: {
    color: "#00d3ff",
    fontSize: 16,
    paddingTop: 19,
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps, { createEmailAccount, registerError })(
  SignUpScreen
);
