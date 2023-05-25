/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  const webviewRef = useRef(null);
  return (
    <WebView
      ref={webviewRef}
      // style={styles.container}
      // source={{uri: 'https://market.break.co.kr'}}
      source={{uri: 'http://192.168.0.93:3000/test'}}
      onMessage={event => {
        console.log('event.nativeEvent.data', event.nativeEvent.data);
        (webviewRef.current as any).postMessage('answer...');
      }}
    />
  );
}

export default App;
