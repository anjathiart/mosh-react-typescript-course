import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import { Expense } from './definitions';

function App() {
	const mockList = [
		{ description: 'Coffee', amount: 10, category: 'Groceries' },
		{ description: 'Movie', amount: 10, category: 'Entertainment' },
	];
	const categories = ['Groceries', 'Utilities', 'Entertainment', 'Other'];
	const [expenses, setExpenses] = useState<Expense[]>(mockList);
	const [filter, setFilter] = useState('All');

	const filteredExpenses = filter === 'All' ? expenses : expenses.filter((expense) => expense.category === filter);

	return (
		<>
			<ExpenseForm categories={categories} onSubmit={(data: Expense) => setExpenses([...expenses, data])}></ExpenseForm>
			<br />
			<hr />
			<br />
			<p>Filter by category: </p>
			<select className="form-select" onChange={(event) => setFilter(event.target.value)}>
				<option value="All">All</option>
				{categories.map((category) => (
					<option key={category} value={category} className="dropdown-item">
						{category}
					</option>
				))}
			</select>

			<table className="table table-bordered">
				<thead>
					<tr>
						<th></th>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				{filteredExpenses.length === 0 ? (
					<tbody>
						<tr>
							<td colSpan={5} className="text-center">
								No expenses found
							</td>
						</tr>
					</tbody>
				) : (
					<tbody>
						{filteredExpenses.map((expense, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{expense.description}</td>
								<td>{expense.amount}</td>
								<td>{expense.category}</td>
								<td className="text-center">
									<button className="btn btn-outline-danger" onClick={() => setExpenses(expenses.filter((e, i) => i !== index))}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				)}
			</table>
		</>
	);
}

export default App;
