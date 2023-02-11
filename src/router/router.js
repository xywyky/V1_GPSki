import React from 'react'
import { routes } from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StartPage, StationPage} from "../pages";
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import InformationPage from "../pages/information/information";
import ProfilePage from "../pages/profile/profile";
import RegisterPage from "../pages/register/register";
import MotDePasse from "../pages/motDePasse/motDePasse";
import ItineraryPage from "../pages/itinerary/itinerary";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen
            name={routes.start}
            component={StartPage}
        />

        <Stack.Screen
          name={routes.login}
          component={LoginPage}
        />

        <Stack.Screen
            name={routes.home}
            component={HomePage}
        />

        <Stack.Screen
          name={routes.register}
          component={RegisterPage}
        />

        <Stack.Screen
          name={routes.profile}
          component={ProfilePage}
        />


        <Stack.Screen
            name={routes.information}
            component={InformationPage}
        />

        <Stack.Screen
            name={routes.station}
            component={StationPage}
        />

        <Stack.Screen
            name={routes.motDePasse}
            component={MotDePasse}
        />

        <Stack.Screen
            name={routes.itinerary}
            component={ItineraryPage}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
