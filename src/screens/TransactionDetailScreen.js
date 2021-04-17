import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { transactions } from "../../src/components/redux/actions/authActions";
import { addTransaction } from "../../src/components/redux/actions/authActions";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      sellerNumber: "",
      itemName: "",
      itemPrice: "",
      itemDescription: "",
    };
    this.itemName = this.itemName.bind(this);
    this.itemPrice = this.itemPrice.bind(this);
    this.sellerPhone = this.sellerPhone.bind(this);
    this.itemDescription = this.itemDescription.bind(this);
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

  itemPrice(e) {
    this.setState({
      itemPrice: e.target.value,
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

    this.props.transactions(data);

    //this.props.addTransaction(data);

    this.props.navigation.navigate("Summary");
  };

  render() {
    console.log(this.props.transact);
    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>
              Name of company you dealing with
            </Text>

            <TextInput
              style={styles.inputText}
              placeholder="Company Name"
              value={this.state.companyName}
              onChangeText={(companyName) => {
                this.setState({ companyName });
              }}
            />
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>Seller's phone number</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Seller's Number"
              keyboardType="numeric"
              value={this.state.sellerPhone}
              onChangeText={(sellerNumber) => {
                this.setState({ sellerNumber });
              }}
            />
          </View>

          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>What are you buying?</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Item Name"
              value={this.state.itemName}
              onChangeText={(itemName) => {
                this.setState({ itemName });
              }}
            />
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              What is the price? GH{"\u20B5"}
            </Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Item Price"
                keyboardType="numeric"
                value={this.state.itemPrice}
                onChangeText={(itemPrice) => {
                  this.setState({ itemPrice });
                }}
              />
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Description</Text>

            <TextInput
              style={styles.inputTxt}
              placeholder="Item Description"
              autoCorrect={true}
              editable={true}
              multiline={true}
              numberOfLines={2}
              maxLength={150}
              value={this.state.itemDescription}
              onChangeText={(itemDescription) => {
                this.setState({ itemDescription });
              }}
            />
          </View>

          <View style={styles.opacityContainer}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                this.handleOnSubmit();
              }}
            >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    //justifyContent: "center",
    padding: 15,
  },

  buyingContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  buyingText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  inputText: {
    backgroundColor: "lightgrey",
    height: 40,
    width: 330,
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 10,
  },

  priceContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  priceText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  currencyContainer: {
    flexDirection: "row",
  },

  currency: {
    fontSize: 18,
    paddingTop: 8,
  },

  inputTest: {
    backgroundColor: "lightgrey",
    height: 40,
    width: 330,
    borderRadius: 8,
    flexDirection: "row",
    paddingLeft: 10,
  },

  numberContainer: {
    //marginLeft: 30,
    paddingBottom: 20,
  },

  numberText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  descriptionContainer: {
    //marginLeft: 30,
    paddingBottom: 15,
  },

  descriptionText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputTxt: {
    backgroundColor: "lightgrey",
    height: 80,
    width: 330,
    borderRadius: 8,
    textAlignVertical: "top",
    fontSize: 15,
    paddingLeft: 10,
  },

  opacityContainer: {
    alignSelf: "center",
    marginTop: 60,
  },

  opacity: {
    backgroundColor: "#00d3ff",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => {
  return {
    transact: state,
  };
};

const mapDispatchToProps = () => {
  return {
    transactions,
    addTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Details);
