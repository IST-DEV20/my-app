import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import * as Network from 'expo-network';

export default function App() {
    const [ip, setIP] = useState('');
    const [mac, setMac] = useState('');

  useEffect(() => {
    (async () => {
       setMac(await Network.getIpAddressAsync());
       setMac(await Network.getMacAddressAsync());
    })();
  }, [setIP,setMac]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>My IP Address:{ip}</Text>
    <Text>My Mac Address:{mac}</Text>
    </View>
  );
}