import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Login/LoginPage";
import ContentPage from "./ContentPage/Content";

import EventDetailScreen from "./Detail/EventDetailScreen";
import TheaterDetailScreen from "./Detail/TheaterDetailScreen";
import ConcertDetailScreen from "./Detail/ConcertDetailScreen";
import PastScreen from "./Past/PastScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcom"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="İçerik" component={ContentPage} />
        <Stack.Screen
          name="EventDetayScreen"
          component={EventDetailScreen}
          options={{ title: "Etkinlik Detayları" }}
        />
        <Stack.Screen
          name="TheaterDetailScreen"
          component={TheaterDetailScreen}
          options={{ title: "Tiyatro Detayları" }}
        />
        <Stack.Screen
          name="ConcertDetailScreen"
          component={ConcertDetailScreen}
          options={{ title: "Konser Detayları" }}
        />
        <Stack.Screen
          name="goToPastScreen"
          component={PastScreen}
          options={{ title: "Kaçırdıklarınız" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
