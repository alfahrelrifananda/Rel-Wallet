import { StyleSheet } from 'react-native';

export const transactionStyles = StyleSheet.create({
	transactionItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#F0F0F0',
	},
	transactionInfo: {
		flex: 1,
	},
	transactionDescription: {
		fontSize: 16,
		fontWeight: '500',
		color: '#333333',
		marginBottom: 4,
	},
	transactionDate: {
		fontSize: 12,
		color: '#666666',
	},
	transactionType: {
		fontSize: 12,
		color: '#888888',
		marginTop: 2,
	},
	transactionAmount: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	creditAmount: {
		color: '#4CAF50',
	},
	debitAmount: {
		color: '#F44336',
	},
});