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

    const sale = this.props.route.params.data.itemPrice;
    const percent = 3;

    const percentage = (percent / 100) * sale;
    const overAllPayment =
      Number(this.props.route.params.data.itemPrice) + percentage;
    console.log("overall", overAllPayment);

    const allSummary = {
      overAllPayment,
      companyName: this.props.route.params.data.companyName,
      sellerNumber: this.props.route.params.data.sellerNumber,
      itemName: this.props.route.params.data.itemName,
      itemDescription: this.props.route.params.data.itemDescription,
      uid: this.props.userId,
    };
    this.props.addSummary(allSummary);

    this.props.navigation.navigate("Payment", { data: overAllPayment });
  };

  render() {
    console.log("route data", this.props.route.params.data);
    console.log("summary", this.props.transact);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.amountText}>Summary</Text>

          <Text style={styles.totalText}>
            GH{"\u20B5"}
            {this.props.route.params.data.itemPrice}
          </Text>

          <Text style={styles.safepayText}>SafePay fee: 3% of item price</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.sellerContainer}>
          <Text style={styles.dealingText}>
            Company name :{this.props.route.params.data.companyName}
          </Text>
          <Text style={styles.numberText}>
            Number:{this.props.route.params.data.sellerNumber}
          </Text>
          <Text style={styles.companyText}></Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.itemContainer}>
          <Text style={styles.purchaseText}>
            Item name :{this.props.route.params.data.itemName}
          </Text>
          <Text style={styles.itemText}></Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Description : {this.props.route.params.data.itemDescription}
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
    backgroundColor: "#DFA4E8",
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
    color: "#7C2F00",
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center",
    color: "#7C2F00",
  },

  safepayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7C2F00",
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
    transact: state.transactions,
    userId: state.user.user.uid,
  };
};

const mapDispatchToProps = () => {
  return {
    total,
    addSummary,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SummaryScreen);
