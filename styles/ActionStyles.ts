import { StyleSheet } from 'react-native';

export const actionStyles = StyleSheet.create({
  actionCard: {
    backgroundColor: '#1C1C23',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    elevation: 4,
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#E8E8F0',
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2D2D37',
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#252530',
    color: '#E8E8F0',
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  addButton: {
    flex: 1,
    backgroundColor: '#018234',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
  },
  spendButton: {
    flex: 1,
    backgroundColor: '#B0122D',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
});