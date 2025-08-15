import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TransactionItem from '../components/TransactionItem';
import { useWalletStore } from '../store/walletStore';
import { screenStyles } from '../styles/ScreenStyles';

export default function TransactionsScreen() {
	const { transactions, formatDate } = useWalletStore();

	return (
		<ScrollView style={screenStyles.container}>
			<View style={screenStyles.transactionHeader}>
				<Text style={screenStyles.sectionTitle}>All Transactions</Text>
				<Text style={screenStyles.transactionCount}>
					{transactions.length} transactions
				</Text>
			</View>
			
			{transactions.map((transaction) => (
				<View key={transaction.id} style={screenStyles.transactionWrapper}>
					<TransactionItem
						transaction={transaction}
						formatDate={formatDate}
						showType={true}
					/>
				</View>
			))}
			
			{transactions.length === 0 && (
				<View style={screenStyles.emptyState}>
					<Text style={screenStyles.emptyText}>No transactions yet</Text>
				</View>
			)}
		</ScrollView>
	);
}
