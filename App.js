import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/Components/HomeScreen';
import StudentLogin from './src/Components/StudentLogin'
import StudentSignup from './src/Components/StudentSignup'
import AdminLogin from './src/Components/AdminLogin'
import MakeProfile from './src/Components/MakeProfile'
import StudentProfile from './src/Components/StudentProfile'
import SubmitDetail from './src/Components/SubmitDetail'
import StudentsDetail from './src/Components/StudentsDetail'
import AdminDashboard from './src/Components/AdminDashboard'
import Job from './src/Components/Job'

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Recruitment System" }} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} options={{ title: "StudentLogin" }} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} options={{ title: "StudentSignup" }} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} options={{ title: "StudentProfile" }} />
        <Stack.Screen name="SubmitDetail" component={SubmitDetail} options={{ title: "SubmitDetail" }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: "AdminLogin" }} />
        <Stack.Screen name="StudentsDetail" component={StudentsDetail} options={{ title: "StudentsDetail" }} />
        <Stack.Screen name="MakeProfile" component={MakeProfile} options={{ title: "MakeProfile" }} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: "AdminDashboard" }} />
        <Stack.Screen name="Job" component={Job} options={{ title: "Post Job" }} />
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
