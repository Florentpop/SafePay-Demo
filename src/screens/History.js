import React, { Component } from "react";
import moment from "moment";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.item);
    // const data = ({itemName, overAllPayment, companyName, sellerNumber, itemDescription, dateTime})
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <StatusBar barStyle="dark-content" backgroundColor="#06C8F4" />
          <TouchableOpacity>
            <View style={styles.contentContainer}>
              <Text style={styles.amountText}>{this.props.item.itemName}</Text>
              <Text style={styles.dateTime}>
                GH{"\u20B5"}
                {this.props.item.overAllPayment}
              </Text>
              <Text style={styles.totalText}>
                {this.props.item.companyName}
              </Text>
              <Text style={styles.dateTime}>
                {this.props.item.sellerNumber}
              </Text>
              <Text style={styles.dateTime}>
                {this.props.item.itemDescription}
              </Text>
              <Text style={styles.dateTime1}>
                {moment(this.props.item.createdAt.toDate()).calendar()}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#FEFCFF",
    //marginTop: 30,
  },

  contentContainer: {
    marginTop: 20,
    alignSelf: "center",
    height: 160,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    //shadowColor: "black",
    // shadowColor: "blue",
    // shadowOpacity: 5.27,
    // shadowRadius: 4.65,
  },

  amountText: {
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 10,
    textAlign: "left",
    color: "#436768",
  },

  totalText: {
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 5,
    textAlign: "left",
    color: "#436768",
  },

  dateTime: {
    fontSize: 16,
    paddingLeft: 20,
    color: "#436768",
    textAlign: "left",
    paddingBottom: 3,
  },

  dateTime1: {
    fontSize: 12,
    paddingRight: 15,
    color: "#436768",
    textAlign: "left",
    paddingBottom: 5,
    alignSelf: "flex-end",
  },

  horizontalLine: {
    borderBottomColor: "#ff70d9",
    borderBottomWidth: 1,
    width: 330,
    alignSelf: "center",
    paddingBottom: 15,
  },
});

export default History;
