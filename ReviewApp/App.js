import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "./styles/global";

const getFont = () =>
  Font.loadAsync({
    "mulish-regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "mulish-bold": require("./assets/fonts/Mulish-Bold.ttf"),
  });

function HomeScreen({ navigation }) {
  const [review, setReviews] = useState([
    {
      title: "League of Legends",
      rating: 5,
      body: "This best game ever",
      key: "1",
    },
    { title: "Path of Exile", rating: 4, body: "Best RPG game", key: "2" },
    { title: "Neverwinter", rating: 3, body: "Best MMORPG", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
function ReviewDetail({ route, navigation }) {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>Title: {title}</Text>
      <Text>Rating: {rating}</Text>
      <Text>Body: {body}</Text>
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Game Review",
              headerStyle: { backgroundColor: "#ddd" },
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              title: "Review Details",
              headerStyle: { backgroundColor: "#ddd" },
            }}
            name="ReviewDetails"
            component={ReviewDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)} />
    );
  }
}
