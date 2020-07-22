import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigationParam } from "@react-navigation/native";

export default function ReviewDetails({ route, navigation }) {
  const title = useNavigationParam("title");
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
    </View>
  );
}
