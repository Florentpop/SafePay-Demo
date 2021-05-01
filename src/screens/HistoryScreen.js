import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { summary } from "../components/redux/actions/authActions";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.content}>
          <Text style={styles.amountText}>Your Transactions</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.horizontalLine} />

        <View style={styles.horizontalLine} />

        <View style={styles.opacityContainer}>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => {
              this.handleOnSubmit();
            }}
          >
            <Text style={styles.continue}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#8fcbbc",
  },
  content: {
    flex: 2,
  },
  amountText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 18,
  },
  horizontalLine: {
    flex: 2,
    borderBottomColor: "#ff70d9",
    borderBottomWidth: 1,
    width: 330,
    alignSelf: "center",
  },
  opacityContainer: {
    alignSelf: "center",
    marginTop: 150,
  },
  opacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },
  continue: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.summary,
  };
};

export default connect(mapStateToProps, { summary })(HistoryScreen);
