import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
    if (props.items.length === 0) {
        return <h2>No expenses found.</h2>
    }

    return (
        <div>
            {props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </div>
    );
};

export default ExpensesList;