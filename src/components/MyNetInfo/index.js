import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";


const MyNetInfo = () => {
  const netInfo = useNetInfo();

  return (
    <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
    </View>
  );
};

export default MyNetInfo;
