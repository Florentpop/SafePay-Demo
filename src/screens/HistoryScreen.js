import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import { summary } from "../components/redux/actions/authActions";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.history}
          keyExtractor={(item, index) => item.key}
          renderItem={({ item }) => <History item={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.summary,
  };
};

export default connect(mapStateToProps, { summary })(HistoryScreen);
