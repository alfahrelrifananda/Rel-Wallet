import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#F5F5F5',
	},
	recentTransactions: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		padding: 20,
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		marginBottom: 16,
	},
	viewAllButton: {
		marginTop: 12,
		padding: 8,
		alignItems: 'center',
	},
	viewAllText: {
		color: '#6200EE',
		fontSize: 16,
		fontWeight: '500',
	},
	transactionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	transactionCount: {
		fontSize: 14,
		color: '#666666',
	},
	transactionWrapper: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		paddingHorizontal: 16,
		marginBottom: 8,
		elevation: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0.5,
		},
		shadowOpacity: 0.15,
		shadowRadius: 1,
	},
	emptyState: {
		alignItems: 'center',
		padding: 40,
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		elevation: 1,
	},
	emptyText: {
		fontSize: 16,
		color: '#666666',
	},
});