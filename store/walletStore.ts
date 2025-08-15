import { create } from 'zustand';
import { WalletState, Transaction } from '../types/wallet';

export const useWalletStore = create<WalletState>((set) => ({
	balance: 1000.00,
	transactions: [
		{
			id: 1,
			type: 'credit',
			amount: 1000.00,
			description: 'Initial Balance',
			date: new Date().toISOString(),
		}
	],
	
	addTransaction: (type: 'credit' | 'debit', amount: number, description: string) => {
		const newTransaction: Transaction = {
			id: Date.now(),
			type,
			amount,
			description,
			date: new Date().toISOString(),
		};

		set((state) => ({
			balance: type === 'credit' 
				? state.balance + amount 
				: state.balance - amount,
			transactions: [newTransaction, ...state.transactions],
		}));
	},

	formatDate: (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { 
			hour: '2-digit', 
			minute: '2-digit' 
		});
	},
}));