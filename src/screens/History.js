import React, { Component } from "react";
import moment from "moment";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

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
        <TouchableOpacity>
          <View style={styles.contentContainer}>
            <Text style={styles.ItemName}>{this.props.item.itemName}</Text>

            <Text style={styles.Amount}>
              GH{"\u20B5"}
              {this.props.item.overAllPayment}
            </Text>

            <Text style={styles.totalText}>{this.props.item.companyName}</Text>
            <Text style={styles.number}>{this.props.item.sellerNumber}</Text>
            <Text style={styles.Descrip}>
              {this.props.item.itemDescription}
            </Text>
            <Text style={styles.dateTime}>
              {moment(this.props.item.createdAt.toDate()).calendar()}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
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
    shadowColor: "blue",
    shadowOpacity: 5.27,
    shadowRadius: 4.65,
    paddingLeft: 15,
    paddingTop: 10,
  },

  amountText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: "left",
    //color: "#436768",
  },

  totalText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
    textAlign: "left",
    //color: "#436768",
  },

  dateTime: {
    fontSize: 14,
    paddingRight: 10,
    color: "#436768",
    //textAlign: "left",
    //paddingBottom: 5,
    alignSelf: "flex-end",
  },

  Descrip: {
    fontSize: 16,
    paddingRight: 15,
  },

  title: {
    fontSize: 18,
    paddingRight: 15,
    // color: "#436768",
    //textAlign: "left",
    //paddingBottom: 5,
    // alignSelf: "flex-start",

    //marginBottom: 10,
  },

  Amount: {
    fontSize: 18,
    paddingRight: 35,
    //color: "#436768",
    //textAlign: "left",
    //paddingBottom: 5,
    // alignContent: "flex-end",
    alignSelf: "flex-end",
    //textAlign: "center",
    //marginBottom: 10,
  },

  number: {
    fontSize: 18,
    paddingRight: 35,
    //color: "#436768",
    //paddingBottom: 5,
    // alignContent: "flex-end",
    alignSelf: "flex-end",
    //textAlign: "center",
    //marginBottom: 10,
  },

  ItemName: {
    fontSize: 18,
    paddingLeft: 10,
    //color: "#436768",
    textAlign: "left",
    paddingBottom: 5,
  },

  horizontalLine: {
    borderBottomColor: "#fff", //"#ff70d9",
    borderBottomWidth: 1,
    width: 330,
    alignSelf: "center",
    paddingBottom: 15,
  },
});

export default History;
