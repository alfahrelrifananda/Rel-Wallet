import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BalanceCard from '../components/BalancedCard';
import ActionCard from '../components/ActionCard';
import TransactionItem from '../components/TransactionItem';
import { useWalletStore } from '../store/walletStore';
import { screenStyles } from '../styles/ScreenStyles';

export default function HomeScreen() {
	const router = useRouter();
	const { balance, transactions, addTransaction, formatDate } = useWalletStore();

	return (
		<ScrollView style={screenStyles.container}>
			<BalanceCard balance={balance} />
			
			<ActionCard balance={balance} addTransaction={addTransaction} />

			<View style={screenStyles.recentTransactions}>
				<Text style={screenStyles.sectionTitle}>Recent Transactions</Text>
				
				{transactions.slice(0, 3).map((transaction) => (
					<TransactionItem
						key={transaction.id}
						transaction={transaction}
						formatDate={formatDate}
					/>
				))}
				
				{transactions.length > 3 && (
					<TouchableOpacity 
						style={screenStyles.viewAllButton} 
						onPress={() => router.push('./transactions' as any)}
					>
						<Text style={screenStyles.viewAllText}>View All Transactions</Text>
					</TouchableOpacity>
				)}
			</View>
		</ScrollView>
	);
}