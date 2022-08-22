import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../../navigation";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";
import AboutScreen from "./About";
import HomeScreen from "./Home";
import SettingsScreen from "../Profile/Settings";

const HomeRoute = () => {
  return (
    <SafeAreaProvider>
      <BottomNavigator
        components={[HomeScreen, AboutScreen, SettingsScreen]}
        name={["Home", "About", "Settings"]}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
