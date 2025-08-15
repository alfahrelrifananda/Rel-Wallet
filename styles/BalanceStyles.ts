import { StyleSheet } from 'react-native';

export const balanceStyles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#1C1C23',
    borderRadius: 28,
    padding: 32,
    marginBottom: 24,
    elevation: 4,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#2D2D37',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#8B8B95',
    marginBottom: 12,
    fontWeight: '500',
    letterSpacing: 0.1,
    textTransform: 'uppercase',
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: '700',
    color: '#A5A6FF',
    letterSpacing: -1,
  },
});