import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import * as React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="settings" size={24} color={color} />
            ) : (
              <Feather name="settings" size={24} color="black" />
            );
          },
        }}
      />
    </Tabs>
  );
}
