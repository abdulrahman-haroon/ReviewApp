import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    marginVertical: -10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
