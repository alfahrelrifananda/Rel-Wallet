import { StyleSheet } from 'react-native';

export const actionStyles = StyleSheet.create({
	actionCard: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		padding: 20,
		marginBottom: 16,
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
	inputContainer: {
		marginBottom: 16,
	},
	input: {
		borderWidth: 1,
		borderColor: '#E0E0E0',
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
		backgroundColor: '#FAFAFA',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 12,
	},
	addButton: {
		flex: 1,
		backgroundColor: '#4CAF50',
		borderRadius: 8,
		paddingVertical: 12,
		alignItems: 'center',
		elevation: 1,
	},
	spendButton: {
		flex: 1,
		backgroundColor: '#F44336',
		borderRadius: 8,
		paddingVertical: 12,
		alignItems: 'center',
		elevation: 1,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});