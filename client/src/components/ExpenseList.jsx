function ExpenseList({ data, onDelete }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">All Expenses</h3>
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="space-y-4">
          {data.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center border border-gray-200 rounded-md p-4 hover:shadow transition duration-200"
            >
              <div>
                <h4 className="text-lg font-medium text-gray-700">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  ₹{item.amount} &middot; <span className="capitalize">{item.category}</span>
                </p>
              </div>
              <button
                onClick={() => onDelete(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition duration-200 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
