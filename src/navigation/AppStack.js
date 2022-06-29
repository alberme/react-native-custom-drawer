import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="Messages" component={MessagesScreen}/>
      <Drawer.Screen name="Moments" component={MomentsScreen}/>
      <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
  )
}

export default AuthStack;