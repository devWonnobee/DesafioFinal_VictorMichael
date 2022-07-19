import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import React from "react";
import Root from './src/index';
import { init } from './src/db';
import store from './src/store';
import { useFonts } from '@expo-google-fonts/inter';

init()
  .then(() => {
    console.log("DB conected, ready to go");
  })
  .catch((err) => {
    console.log("Error connection DB", err);
  });

export default function App() {

  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
    'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  
  if(!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>
    
  );
}


