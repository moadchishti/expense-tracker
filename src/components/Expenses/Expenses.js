import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div className='shell'>
            <ExpensesFilter 
                selected={filteredYear} onChangeFilter={filterChangeHandler} 
            />            
            <ExpensesChart expenses={filteredExpenses} />    
            <ExpensesList items={filteredExpenses} />
      </div>
    );
};

export default Expenses