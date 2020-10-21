import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AxisPad from 'react-native-axis-pad';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <AxisPad
          resetOnRelease={true}
          autoCenter={true}
          onValue={({ x, y }) => {
            // values are between -1 and 1
            console.log(x, y);
          }}
        />
        <AxisPad
          resetOnRelease={true}
          autoCenter={true}
          onValue={({ x, y }) => {
            // values are between -1 and 1
            console.log(x, y);
          }}
        />
      </View>
    );
  }
}
