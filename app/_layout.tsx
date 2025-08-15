import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
	return (
		<>
			<StatusBar style="light" backgroundColor="#6200EE" />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: '#6200EE',
					tabBarInactiveTintColor: '#666666',
					tabBarStyle: {
						backgroundColor: '#FFFFFF',
						elevation: 8,
						paddingVertical: 4,
					},
					headerStyle: {
						backgroundColor: '#6200EE',
					},
					headerTintColor: '#FFFFFF',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 20,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Home',
						headerTitle: 'My Wallet',
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="account-balance-wallet" size={size} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="transactions"
					options={{
						title: 'Transactions',
						headerTitle: 'All Transactions',
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="receipt-long" size={size} color={color} />
						),
					}}
				/>
			</Tabs>
		</>
	);
}