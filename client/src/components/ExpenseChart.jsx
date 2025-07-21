import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#35f2efff"];

function ExpenseChart({ data }) {
  const grouped = data.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const chartData = Object.keys(grouped).map((key) => ({
    category: key,
    amount: grouped[key]
  }));

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        Expense Distribution
      </h2>
      <PieChart width={350} height={300} className="mx-auto">
        <Pie
          data={chartData}
          dataKey="amount"
          nameKey="category"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
