import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import { getSummary } from "../components/redux/actions/authActions";
import History from "./History";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getSummary;
  }
  render() {
    return (
      <ScrollView>
        <View>
          <History />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.summarys,
  };
};

const mapDispatchToProps = () => {
  return {
    getSummary,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
