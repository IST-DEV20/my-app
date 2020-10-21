import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Video } from 'expo-av';


export default class App extends React. Component{
    _videoRef;
  
    showVideoInFullscreen = async () => {
      // PlaybackStatus https://docs.expo.io/versions/latest/sdk/av/
      const status = await this._videoRef.presentFullscreenPlayer();
      console.log(status)
    }
  
    dismissVideoFromFullscreen = async () => {
      const status = await this._videoRef.dismissFullscreenPlayer();
      console.log(status);
    }
  
    onFullscreenUpdate = ({fullscreenUpdate, status}) => {
      console.log(fullscreenUpdate, status)
      switch (fullscreenUpdate) {
        case Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT: 
          console.log(' the fullscreen player is about to present');
          break;
        case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT: 
          console.log('the fullscreen player just finished presenting');
          break;
        case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS: 
          console.log('the fullscreen player is about to dismiss');
          break;
        case Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS: 
          console.log('the fullscreen player just finished dismissing');
      }
    }
  
    render () {
     return (
         <View style={{
            flex: 1,
          }}>
             <Video
                 ref={(ref) => (this._videoRef = ref)}
                 source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                 resizeMode="cover"
                 useNativeControls
                 onFullscreenUpdate={this.onFullscreenUpdate}
                 style={{ width: 300, height: 300 }}
             />
             <Button
                 title={'show video'}
                 onPress={() => {
                     this.showVideoInFullscreen();
                 }}
             />
         </View>
     );
    }
  }