import { StyleSheet } from 'react-native';

export const balanceStyles = StyleSheet.create({
	balanceCard: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		padding: 24,
		marginBottom: 16,
		elevation: 2,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	balanceLabel: {
		fontSize: 16,
		color: '#666666',
		marginBottom: 8,
	},
	balanceAmount: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#1976D2',
	},
});