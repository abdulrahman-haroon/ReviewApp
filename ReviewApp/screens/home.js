import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
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
