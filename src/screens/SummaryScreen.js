import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { total } from "../../src/components/redux/actions/authActions";
import { addSummary } from "../../src/components/redux/actions/authActions";

class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overAllPayment: "",
      companyName: "",
      sellerNumber: "",
      itemName: "",
      itemDescription: "",
    };
    this.overAllPayment = this.overAllPayment.bind(this);
    this.itemPrice = this.itemPrice.bind(this);
    this.companyName = this.companyName.bind(this);
    this.sellerPhone = this.sellerPhone.bind(this);
    this.itemName = this.itemName.bind(this);
    this.itemDescription = this.itemDescription.bind(this);
  }

  overAllPayment(e) {
    this.setState({
      overAllPayment: e.target.value,
    });
  }

  itemPrice(e) {
    this.setState({
      itemPrice: e.target.value,
    });
  }

  companyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }
  sellerPhone(e) {
    this.setState({
      sellerPhone: e.target.value,
    });
  }

  itemName(e) {
    this.setState({
      itemName: e.target.value,
    });
  }

  itemDescription(e) {
    this.setState({
      itemDescription: e.target.value,
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleOnSubmit = () => {
    const data = this.state;

    this.props.total(data);

    const sale = this.props.transact.itemPrice;
    const percent = 3;

    const percentage = (percent / 100) * sale;
    const overAllPayment = Number(this.props.transact.itemPrice) + percentage;

    this.props.addSummary(data);

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
            You are dealing with :{this.props.transact.companyName}
          </Text>
          <Text style={styles.numberText}>
            Number:{this.props.transact.sellerNumber}
          </Text>
          <Text style={styles.companyText}></Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.itemContainer}>
          <Text style={styles.purchaseText}>
            Your are purchasing :{this.props.transact.itemName}
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
    backgroundColor: "white",
    elevation: 25,
    shadowColor: "#DEF5FA",
  },

  amountText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 10,
    textAlign: "center",
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center",
  },

  safepayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
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
    textAlign: "center",
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
