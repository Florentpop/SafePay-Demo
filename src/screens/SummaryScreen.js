import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import {summary} from '../components/redux/actions/authActions';

class SummaryScreen extends Component {
 render(){
   console.log("summary",this.props.transact)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Summary</Text>

        <Text style={styles.totalText}>GH{"\u20B5"}{this.props.transact.itemPrice}</Text>

        <Text style={styles.safepayText}>SafePay fee: GH{"\u20B5"}20.20</Text>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.sellerContainer}>
        <Text style={styles.dealingText}>You are dealing with :{this.props.transact.companyName}</Text>
        <Text style={styles.numberText}>Number:{this.props.transact.sellerNumber}</Text>
        <Text style={styles.companyText}></Text>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.itemContainer}>
        <Text style={styles.purchaseText}>Your are purchasing :{this.props.transact.itemName}</Text>
        <Text style={styles.itemText}></Text>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Description : {this.props.transact.itemDescription}</Text>
        <Text style={styles.itemText}></Text>
      </View>

      <View style={styles.opacityContainer}>
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => this.props.navigation.navigate('Payment')}
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

  amountContainer: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 300,
    alignSelf: "center",
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
  transact : state.transactions
  }
}

const mapDispatchToProps = () => {
  return {
   summary
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(SummaryScreen);