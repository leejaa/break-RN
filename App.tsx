/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StyleSheet, Share} from 'react-native';

function App(): JSX.Element {
  const webviewRef = useRef(null);

  const handleShare = async () => {
    await Share.share({
      url: 'https://market.break.co.kr',
      title: '브레이크',
      message: 'https://market.break.co.kr',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        // source={{uri: 'https://market.break.co.kr'}}
        source={{uri: 'http://192.168.0.93:3000/test'}}
        onMessage={handleShare}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
