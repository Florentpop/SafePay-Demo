import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { total } from "../../src/components/redux/actions/authActions";
import { addSummary } from "../../src/components/redux/actions/authActions";

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
    console.log("summary", this.props.transact);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.amountText}>Summary</Text>

          <Text style={styles.totalText}>
            GH{"\u20B5"}
            {this.props.transact.itemPrice}
          </Text>

          <Text style={styles.safepayText}>SafePay fee: 3% of item price</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.sellerContainer}>
          <Text style={styles.dealingText}>
            Company name :{this.props.transact.companyName}
          </Text>
          <Text style={styles.numberText}>
            Number:{this.props.transact.sellerNumber}
          </Text>
          <Text style={styles.companyText}></Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.itemContainer}>
          <Text style={styles.purchaseText}>
            Item name :{this.props.transact.itemName}
          </Text>
          <Text style={styles.itemText}></Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Description : {this.props.transact.itemDescription}
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
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  contentContainer: {
    alignSelf: "center",
    height: 150,
    width: 300,
    backgroundColor: "#c8abc5",
    borderRadius: 10,
    elevation: 45,
    //shadowColor: "black",
    shadowColor: "blue",
    shadowOpacity: 5.27,
    shadowRadius: 4.65,
  },

  amountText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 10,
    textAlign: "center",
    color: "#0f184b",
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center",
    color: "#0f184b",
  },

  safepayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f184b",
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
    marginTop: -15,
  },
  dealingText: {
    paddingBottom: 20,
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 18,
    paddingLeft: 10,
    color: "#484b5a",
  },
  numberText: {
    fontWeight: "bold",
    marginLeft: 36,
    fontSize: 18,
    color: "#484b5a",
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
    backgroundColor: "#00d3ff",
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
