import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	description: z.string().min(3, { message: 'Description must be at least 3 characters' }),
	amount: z.number({ invalid_type_error: 'Amount must be a number' }).min(0.01, { message: 'Amount must be at least 0.01' }),
	category: z.string().min(3, { message: 'Category must be at least 3 characters' }),
});

type FormData = z.infer<typeof schema>;

interface Props {
	categories: string[];
	onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ categories, onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	// extend handleSubmit to clear the form if the form is valid and submitted
	const onSubmitHandler = (data: FormData) => {
		onSubmit(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input type="text" id="description" className="form-control" {...register('description')} />
				{errors.description && <p className="text-danger">{errors.description.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input type="float" id="amount" className="form-control" {...register('amount', { valueAsNumber: true })} />
				{errors.amount && <p className="text-danger">{errors.amount.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select id="category" className="form-select" {...register('category')}>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
				{errors.category && <p className="text-danger">{errors.category.message}</p>}
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default ExpenseForm;
