import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./shared/header";
import Card from "./shared/card";
import { globalStyles, images } from "./styles/global";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReviewForm from "./screen/reviewForm";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const getFont = () =>
  Font.loadAsync({
    "mulish-regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "mulish-bold": require("./assets/fonts/Mulish-Bold.ttf"),
  });

function HomeScreen({ navigation }) {
  const [modelOpen, setModalOpen] = useState(false);

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
  const addReview = (review) => {
    review.key = Math.random.toString();
    setReviews((currentReview) => {
      return [review, ...currentReview];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType={"slide"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons
              name="close-network"
              size={24}
              style={{ ...styles.modalToggel, ...styles.closeToggle }}
              color="black"
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Entypo
        name="add-to-list"
        size={24}
        color="black"
        style={styles.modalToggel}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
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
      <Card>
        <Text>Title: {title}</Text>
        <Text>Body: {body}</Text>
        <View style={styles.rating}>
          <Text>Game Review Rating:</Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
}
function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>
        An app that is created with the help of internet. This is developed
        using React Native Navigation 5.
      </Text>
      <Text style={styles.tt}>Made by Abdul Rahman Haroon. </Text>
    </View>
  );
}
const Stack = createStackNavigator();
function aboutStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={
          ({
            headerStyle: { backgroundColor: "#ddd", height: 80 },
            headerTintColor: "#444",
          },
          ({ navigation }) => {
            return {
              headerTitle: () => (
                <Header navigation={navigation} title="About Game Reviews" />
              ),
            };
          })
        }
        name="AboutPage"
        component={About}
      />
    </Stack.Navigator>
  );
}
function homeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={
          ({
            headerStyle: { backgroundColor: "#ddd", height: 80 },
            headerTintColor: "#444",
          },
          ({ navigation }) => {
            return {
              headerTitle: () => (
                <Header navigation={navigation} title="Game Reviews" />
              ),
            };
          })
        }
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Review Details",
          headerStyle: { backgroundColor: "white", height: 80 },
        }}
        name="ReviewDetails"
        component={ReviewDetail}
      />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            options={{
              title: "Game Review",
              headerStyle: { backgroundColor: "#ddd", height: 80 },
              headerTintColor: "#444",
            }}
            name="Home"
            component={homeStack}
          />
          <Drawer.Screen
            options={{
              title: "About",
              headerStyle: { backgroundColor: "#ddd", height: 80 },
              headerTintColor: "#444",
            }}
            name="AboutPage"
            component={aboutStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)} />
    );
  }
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  modalToggel: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
  closeToggle: {
    marginTop: 20,
    marginBottom: 0,
  },
  tt: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
  },
});
