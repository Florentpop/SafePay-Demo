import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import {
  getSummary,
  addTransactions,
} from "../components/redux/actions/authActions";
import History from "./History";
import firebase from "firebase";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }
  componentDidMount() {
    const getHistory = async () => {
      const db = firebase.firestore();
      const transactionRef = db.collection("summarys");
      const transactions = await transactionRef.get();
      // console.log("transanctions", transactions);

      transactions.forEach((doc) => {
        this.setState({ history: [...this.state.history, doc.data()] });
      });
    };
    getHistory();
  }

  // getData = async () => {
  //   const db = firebase.firestore();
  //   const transactionRef = db.collection("summarys");
  //   const transactions = await transactionRef.get();

  //   // transactions.forEach
  //   // });
  // };
  render() {
    //console.log("state", this.state.history);
    // console.log("all summarys", this.props.history);
    // console.log(this.props.transactions);
    return (
      <View>
        <FlatList
          data={this.state.history}
          keyExtractor={(item, index) => {
            item.uid;
          }}
          renderItem={({ item }) => (
            <History
              item={item}
              // name={this.props.navigation.navigate("SummaryScreen")}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.summarys,
    transactions: state.transactions,
    // .filter((item) => {
    //   return item.uid === state.user.user.uid;
    // }),
  };
};

const mapDispatchToProps = () => {
  return {
    getSummary,
    addTransactions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
