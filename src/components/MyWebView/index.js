import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://192.168.10.209:8080/' }} style={{ marginTop: 0 }} />;
  }
}