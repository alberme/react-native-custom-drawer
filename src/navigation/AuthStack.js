import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from '../screens/OnboardingScreen';
import Login from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name='Onboarding'
        component={Onboarding}
      />
      <Stack.Screen
        name='Login'
        component={Login}
      />
    </Stack.Navigator>
  )
}

export default AuthStack;