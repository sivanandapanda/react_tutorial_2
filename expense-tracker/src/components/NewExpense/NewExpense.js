import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onSaveExpenseData }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
