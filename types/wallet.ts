export interface Transaction {
	id: number;
	type: 'credit' | 'debit';
	amount: number;
	description: string;
	date: string;
}

export interface WalletState {
	balance: number;
	transactions: Transaction[];
	addTransaction: (type: 'credit' | 'debit', amount: number, description: string) => void;
	formatDate: (dateString: string) => string;
}