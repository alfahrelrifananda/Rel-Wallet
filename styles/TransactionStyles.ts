import { StyleSheet } from 'react-native';

export const transactionStyles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D37',
  },
  transactionInfo: {
    flex: 1,
    paddingRight: 12,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E8E8F0',
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  transactionDate: {
    fontSize: 13,
    color: '#8B8B95',
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  transactionType: {
    fontSize: 12,
    color: '#B8B8C0',
    marginTop: 4,
    fontWeight: '500',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  transactionAmount: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  creditAmount: {
    color: '#6EDB74',
  },
  debitAmount: {
    color: '#FF6B6B',
  },
});