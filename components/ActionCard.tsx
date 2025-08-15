import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { actionStyles } from '../styles/ActionStyles';

interface ActionCardProps {
	balance: number;
	addTransaction: (type: 'credit' | 'debit', amount: number, description: string) => void;
}

export default function ActionCard({ balance, addTransaction }: ActionCardProps) {
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');

	const addMoney = () => {
		const value = parseFloat(amount);
		if (isNaN(value) || value <= 0) {
			Alert.alert('Error', 'Please enter a valid amount');
			return;
		}

		addTransaction('credit', value, description || 'Money Added');
		setAmount('');
		setDescription('');
		Alert.alert('Success', `$${value.toFixed(2)} added to wallet`);
	};

	const spendMoney = () => {
		const value = parseFloat(amount);
		if (isNaN(value) || value <= 0) {
			Alert.alert('Error', 'Please enter a valid amount');
			return;
		}

		if (value > balance) {
			Alert.alert('Error', 'Insufficient balance');
			return;
		}

		addTransaction('debit', value, description || 'Money Spent');
		setAmount('');
		setDescription('');
		Alert.alert('Success', `$${value.toFixed(2)} spent from wallet`);
	};

	return (
		<View style={actionStyles.actionCard}>
			<Text style={actionStyles.sectionTitle}>Quick Actions</Text>
			
			<View style={actionStyles.inputContainer}>
				<TextInput
					style={actionStyles.input}
					placeholder="Enter amount"
					placeholderTextColor="#666"
					value={amount}
					onChangeText={setAmount}
					keyboardType="numeric"
				/>
			</View>

			<View style={actionStyles.inputContainer}>
				<TextInput
					style={actionStyles.input}
					placeholder="Description (optional)"
					placeholderTextColor="#666"
					value={description}
					onChangeText={setDescription}
				/>
			</View>

			<View style={actionStyles.buttonContainer}>
				<TouchableOpacity style={actionStyles.addButton} onPress={addMoney}>
					<Text style={actionStyles.buttonText}>Add Money</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={actionStyles.spendButton} onPress={spendMoney}>
					<Text style={actionStyles.buttonText}>Spend Money</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}