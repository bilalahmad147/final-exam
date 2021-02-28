import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/Components/HomeScreen';
import Details from './src/Components/Details'
import StudentLogin from './src/Components/StudentLogin'
import StudentSignup from './src/Components/StudentSignup'
import AdminLogin from './src/Components/AdminLogin'
import CompanyLogin from './src/Components/CompanyLogin'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#DF6589FF',
        },
        headerTintColor: '#3C1053FF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "HomeScreen" }} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} options={{ title: "StudentLogin" }} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} options={{ title: "StudentSignup" }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: "AdminLogin" }} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} options={{ title: "CompanyLogin" }} />
        <Stack.Screen name="Details" component={Details} options={{ title: "Details" }} />
      </Stack.Navigator>
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
