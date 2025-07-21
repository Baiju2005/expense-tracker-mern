import { useState } from "react";
import axios from "axios";

function ExpenseForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/expenses/add", formData);
    onAdd(res.data);
    setFormData({ title: "", amount: "", category: "Room" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4 mt-8"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Add Expense 💸</h2>

      <input
        type="text"
        placeholder="Title eg. Groceries, Rent, etc."
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>Food</option>
        <option>Travel / Fuel</option>
        <option>Shopping</option>
        <option>Entertainment</option>
        <option>Others...</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Expense
      </button>

      <div className="mt-4 text-gray-700 text-sm md:text-base">
        <p className="mb-1">
          💡 <strong>Tip:</strong> Track your daily, weekly, or monthly expenses to manage your finances better.
        </p>
      </div>
    </form>
  );
}

export default ExpenseForm;
