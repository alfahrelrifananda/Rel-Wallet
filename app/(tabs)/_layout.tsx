import * as React from "react";
import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({color}) => {return (
        <Entypo name="home" size={24} color={color} />
      )}}}/>
      <Tabs.Screen name="settings" options={{title: "Settings", tabBarIcon: ({color}) => {return (
        <Ionicons name="settings" size={24} color={color} />
      )}}}/>
    </Tabs>
  )
}