import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  total,
  addSummary,
} from "../../src/components/redux/actions/authActions";

class SummaryScreen extends Component {
  constructor(props) {
    super(props);
  }
  handleOnSubmit = () => {
    const data = this.state;

    this.props.total(data);

    const sale = this.props.transact.itemPrice;
    const percent = 3;

    const percentage = (percent / 100) * sale;
    const overAllPayment = Number(this.props.transact.itemPrice) + percentage;
    console.log(overAllPayment);

    const allSummary = {
      overAllPayment,
      companyName: this.props.transact.companyName,
      sellerNumber: this.props.transact.sellerNumber,
      itemName: this.props.transact.itemName,
      itemDescription: this.props.transact.itemDescription,
    };
    this.props.addSummary(allSummary);

    this.props.navigation.navigate("Payment", { data: overAllPayment });
  };

  render() {
    //console.log("summary", this.props.transact);
    console.log(addSummary);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.gh}>
          <View style={styles.contentContainer}>
            <Text style={styles.amountText}>Summary</Text>

            <Text style={styles.totalText}>
              GH{"\u20B5"}
              {this.props.transact.itemPrice}
            </Text>

            <Text style={styles.safepayText}>
              SafePay fee: 3% of item price{" "}
            </Text>
          </View>
        </View>

        <View style={styles.top}>
          {/*<View style={styles.horizontalLine} />*/}

          <View style={styles.sellerContainer}>
            <Text style={styles.dealingText}>Company Name :</Text>
            <Text style={styles.numberText}>
              {this.props.transact.companyName}
            </Text>

            <Text style={styles.numberText}>
              {this.props.transact.sellerNumber}
            </Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.itemContainer}>
            <Text style={styles.dealingText}>Item Name :</Text>
            <Text style={styles.numberText}>
              {this.props.transact.itemName}
            </Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Description :</Text>
            <Text style={styles.numberText}>
              {this.props.transact.itemDescription}
            </Text>
            <Text style={styles.itemText}></Text>
          </View>

          <View style={styles.opacityContainer}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                this.handleOnSubmit();
              }}
            >
              <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "blue",
  },

  gh: {
    flex: 2,
    //backgroundColor: "blue",
    shadowColor: "#ffffff",
    shadowOpacity: 7.27,
    shadowRadius: 4.65,
    justifyContent: "space-evenly",
  },

  top: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-evenly",
  },

  contentContainer: {
    alignSelf: "center",
    height: 150,
    width: 300,
    //backgroundColor: "#DFA4E8",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#fff",

    borderRadius: 10,
    //elevation: 45,
    //shadowColor: "black",
    // shadowColor: "blue",
    //shadowOpacity: 5.27,
    //shadowRadius: 4.65,
  },

  amountText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 10,
    textAlign: "center",
    color: "#ffffff", //"#7C2F00",
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center",
    color: "#ffffff", //"#7C2F00",
  },

  safepayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", //"#7C2F00",
    textAlign: "center",
  },

  horizontalLine: {
    borderBottomColor: "#ff70d9",
    borderBottomWidth: 1,
    width: 330,
    alignSelf: "center",
  },

  sellerContainer: {
    //alignSelf: "center",
    marginTop: 5,
  },
  dealingText: {
    paddingBottom: 5,
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 18,
    paddingLeft: 10,
    color: "#484b5a",
  },
  numberText: {
    // fontWeight: "bold",
    marginLeft: 40,
    alignSelf: "center",
    fontSize: 18,
    // color: "#484b5a",
    //paddingLeft: 10,
  },
  companyText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    //paddingLeft: 10,
  },

  itemContainer: {
    //alignSelf: "center",
    marginTop: -15,
  },
  purchaseText: {
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 20,
    color: "#484b5a",
  },
  itemText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    paddingLeft: 10,
  },

  descriptionContainer: {
    //alignSelf: "center",
    marginTop: -15,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "bold",
    //textAlign: "center",
    paddingLeft: 10,
    paddingBottom: 20,
    color: "#484b5a",
  },

  opacityContainer: {
    alignSelf: "center",
  },
  opacity: {
    backgroundColor: "blue",
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
    transact: state.transactions,
  };
};

const mapDispatchToProps = () => {
  return {
    total,
    addSummary,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SummaryScreen);
