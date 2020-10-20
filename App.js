import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";


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
import MyStatusBar from './src/components/MyStatusBar';
import MyBackHandle from './src/components/MyBackHandle';
import MyLaouts from './src/components/MyLaouts';




import { enableScreens } from 'react-native-screens';
enableScreens();

import * as ScreenOrientation from "expo-screen-orientation";
ScreenOrientation.unlockAsync();


export default function App() {
   

  return (

      <View
        style={{
          flex: 1,
        }}
      >
        <MyLaouts/>
        <MyBackHandle/>
        <MyStatusBar />
      </View>

  );
}
