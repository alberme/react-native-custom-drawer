import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Fonts = {
  'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
  'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
}

export default function App() {
  const [loaded] = useFonts(Fonts);
  
  if (!loaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
