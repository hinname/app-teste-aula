import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/routes/Login';
import SignUp from './src/routes/SignUp';
import Notifications from './src/routes/Notifications';
import Home from './src/routes/Home';
import Profile from './src/routes/Profile';
import Settings from './src/routes/Settings';
import Contacts from './src/routes/Contacts';

export default function App() {
  const [isSignedin, setIsSignedin] = useState(false);
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const Stack2 = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      {isSignedin ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={() => {return(
            <Tab.Navigator>
              <Tab.Screen name="Home" options={{headerShown: false}}component={() => {return(
                <Stack.Navigator>
                  <Stack.Screen name='Home_Stack' component={Home} initialParams={{funcLogar : setIsSignedin}} options={{headerShown: false}}/>
                  <Stack.Screen name='Perfil' component={Profile}/>
                </Stack.Navigator>
              )}} />
              <Tab.Screen name="Avisos" component={Notifications} />
            </Tab.Navigator>
       )}} />
          <Drawer.Screen name='Config' component={Settings} />
          <Drawer.Screen name='Contatos' component={Contacts} />
        </Drawer.Navigator>
        ): (
          <Stack2.Navigator>
            <Stack2.Screen name="Login" component={Login} initialParams={{funcLogar : setIsSignedin}} />
            <Stack2.Screen name="SignUp" component={SignUp} />
          </Stack2.Navigator>
        )}
    </NavigationContainer>
  );
}
