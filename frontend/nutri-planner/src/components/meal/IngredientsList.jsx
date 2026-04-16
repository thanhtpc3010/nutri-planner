const IngredientsList = ({ ingredients }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="px-6 py-4 border-b bg-gray-50 rounded-t-xl">
        <h3 className="text-lg font-semibold text-gray-900">Ingredients</h3>
      </div>
      <ul className="divide-y divide-gray-100">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="px-6 py-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">{ingredient.name}</span>
              <span className="text-gray-700">{ingredient.quantity} {ingredient.unit}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;

