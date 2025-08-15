import React from 'react';
import { View, Text } from 'react-native';
import { balanceStyles } from '../styles/BalanceStyles';

interface BalanceCardProps {
	balance: number;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
	return (
		<View style={balanceStyles.balanceCard}>
			<Text style={balanceStyles.balanceLabel}>Available Balance</Text>
			<Text style={balanceStyles.balanceAmount}>Rp. {balance}</Text>
		</View>
	);
}