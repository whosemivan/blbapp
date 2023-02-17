import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoSvg from "./svg/logo";

import Auth from './pages/Auth';
import PhotoSticker from './pages/PhotoSticker';


export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#181717'}, headerTintColor: '#4F7AF6' }}>
        <Stack.Screen
        name="Home"
        component={Auth}
        >
        </Stack.Screen>
        <Stack.Screen
        name="PhotoSticker"
        component={PhotoSticker}
        options={{ headerTitle: (props) => (
          <LogoSvg/>
        )}}
        >
          
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
