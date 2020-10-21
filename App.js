import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import { StatusBar } from "expo-status-bar";
// import {
//   SafeAreaView,
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";

//import MyCamera from "./src/components/MyCamera";
//import MyGyroscope from './src/components/MyGyroscope';
//import MyBarometer from './src/components/MyBarometer';
//import MyBarcodeScaner from './src/components/MyBarcodeScaner';
//import MyBattery from './src/components/MyBattery';
//import MyCalendar from './src/components/MyCalendar';
//import MyDateTime from './src/components/MyDateTimePicker';
//import MyGLView from './src/components/MyGLView';
//import My2DView from './src/components/My2DView';
//import MyWebView from './src/components/MyWebView';
//import MyToase from './src/components/MyToase';
//import MyLocate from './src/components/MyLocate';
//import MyImageEdit from './src/components/MyImageEdit';
//import MyAwake from './src/components/MyKeepAwake';
//import MyNetWork from './src/components/MyNetwork';
//import MyImagePicker from './src/components/MyImagePicker';
//import MyLotieView from './src/components/MyLotieView';
//import MyMagnito from './src/components/MyMagnitoMeter';
//import MyMapView from './src/components/MyMapView';
//import MyMaskView from './src/components/MyMaskView';
//import MyNetInfo from './src/components/MyNetInfo';
//import MyNotification from './src/components/MyNotification';
//import MyPedometer from './src/components/MyPedometer';
//import MyPicker from './src/components/MyPicker';
//import MyReanimate from "./src/components/MyReanimated";
//import MySharing from './src/components/MySharing';
//import MySharingWeb from './src/components/MySharingWeb';
//import MySlide from './src/components/MySlider';
//import MyWinDim from './src/components/MyWindowDim';
//import MyStatusBar from "./src/components/MyStatusBar";
//import MyBackHandle from './src/components/MyBackHandle';
//import MyLaouts from './src/components/MyLaouts';
//import MyVideo from "./src/components/MyVideo";
//import MyModalFull from './src/components/MyModalFull'; 
//import MyJoyStick from './src/components/MyJoystick';// NOT WORK
//import MyGamePad from './src/components/MyGamePad';// NOT WORK
//import MyNavEx01 from './src/components/MyNavEx01'; // 
//import MyHeaderBtn from './src/components/MyHeaderButton';


import { enableScreens } from "react-native-screens";
enableScreens();

import * as ScreenOrientation from "expo-screen-orientation";
ScreenOrientation.unlockAsync();


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//     </View>
//   );
// }

// function ModalScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   );
// }



// const MainStack = createStackNavigator();
// const RootStack = createStackNavigator();

// function MainStackScreen() {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={HomeScreen} />
//       <MainStack.Screen name="Details" component={DetailsScreen} />
//     </MainStack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator mode="modal" headerMode="none">
//         <RootStack.Screen name="Main" component={MainStackScreen} />
//         <RootStack.Screen name="MyModal" component={ModalScreen} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }



//import App from './src/components/MyTabNav';
//import App from './src/components/MyDrawer';
//import App from './src/components/MyHiddenTabBar';
//import App from './src/components/MyHiddingTabScreen';
//import App from './src/components/MyUseNavEx';
//import App from './src/components/MyOperatingTheme';
//import App from './src/components/MyRedux';
import App from './src/components/MyLocalize';

export default App;