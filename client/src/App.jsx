import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("https://expense-tracker-mern-backend-pzst.onrender.com");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAdd = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Expense Tracker
        </h1>

        {/* All three in a single row */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-auto">
            <ExpenseForm onAdd={handleAdd} />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-auto">
            <ExpenseChart data={expenses} />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-auto">
            <ExpenseList data={expenses} onDelete={handleDelete} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
