import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value, 10);

        if (newBudget > 20000) {
            // Display an error message to the user
            alert('Budget cannot be more than £20,000');
            return;
        }

        if (newBudget < budget) {
            // Display an error message to the user
            alert('Budget cannot be lower than the spending');
            return;
        }

        setNewBudget(newBudget);
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
