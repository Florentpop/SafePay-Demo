import React, { Component } from "react";
import moment from "moment";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.item);
    // const data = ({itemName, overAllPayment, companyName, sellerNumber, itemDescription, dateTime})
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#06C8F4" />
        <View style={styles.contentContainer}>
          <Text style={styles.amountText}>{this.props.item.itemName}</Text>
          <Text style={styles.dateTime}>
            GH{"\u20B5"}
            {this.props.item.overAllPayment}
          </Text>
          <Text style={styles.totalText}>{this.props.item.companyName}</Text>
          <Text style={styles.dateTime}>{this.props.item.sellerNumber}</Text>
          <Text style={styles.dateTime}>{this.props.item.itemDescription}</Text>
          <Text style={styles.dateTime}>
            {moment(this.props.item.createdAt.toDate()).calendar()}
          </Text>
        </View>

        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  contentContainer: {
    marginTop: 20,
    alignSelf: "center",
    height: 160,
    width: 350,
    backgroundColor: "#F3F3CC",
    borderRadius: 10,
    elevation: 5,
    //shadowColor: "black",
    shadowColor: "blue",
    shadowOpacity: 5.27,
    shadowRadius: 4.65,
  },

  amountText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: "left",
    color: "#436768",
  },

  totalText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
    textAlign: "left",
    color: "#436768",
  },

  dateTime: {
    fontSize: 18,
    paddingLeft: 10,
    color: "#436768",
    textAlign: "left",
    paddingBottom: 5,
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
