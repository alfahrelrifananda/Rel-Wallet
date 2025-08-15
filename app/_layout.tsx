import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0F0F14" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#8B8B95",
          tabBarStyle: {
            backgroundColor: "#1C1C23",
            elevation: 8,
            paddingVertical: 8,
            borderTopColor: "#2D2D37",
          },
          headerStyle: {
            backgroundColor: "#0F0F14",
            elevation: 4,
            borderBottomColor: "transparent"
          },
          headerTintColor: "#E8E8F0",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 22,
            letterSpacing: -0.5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            headerTitle: "Rel Wallet",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="account-balance-wallet"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: "",
            headerTitle: "All Transactions",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="receipt-long" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
