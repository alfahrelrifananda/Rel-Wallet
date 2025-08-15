import React from 'react';
import { View, Text } from 'react-native';
import { Transaction } from '../types/wallet';
import { transactionStyles } from '../styles/TransactionStyles';

interface TransactionItemProps {
	transaction: Transaction;
	formatDate: (dateString: string) => string;
	showType?: boolean;
}

export default function TransactionItem({ 
	transaction, 
	formatDate, 
	showType = false 
}: TransactionItemProps) {
	return (
		<View style={transactionStyles.transactionItem}>
			<View style={transactionStyles.transactionInfo}>
				<Text style={transactionStyles.transactionDescription}>
					{transaction.description}
				</Text>
				<Text style={transactionStyles.transactionDate}>
					{formatDate(transaction.date)}
				</Text>
				{showType && (
					<Text style={transactionStyles.transactionType}>
						{transaction.type === 'credit' ? 'Money Added' : 'Money Spent'}
					</Text>
				)}
			</View>
			<Text style={[
				transactionStyles.transactionAmount,
				transaction.type === 'credit' 
					? transactionStyles.creditAmount 
					: transactionStyles.debitAmount
			]}>
				{transaction.type === 'credit' ? '+' : '-'}Rp. {transaction.amount}
			</Text>
		</View>
	);
}