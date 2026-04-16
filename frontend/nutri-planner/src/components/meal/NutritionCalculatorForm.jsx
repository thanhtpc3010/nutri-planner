import { useState } from 'react';
import { nutritionService } from '../../services/nutritionService.js';
import NutritionTable from '../common/NutritionTable.jsx';

const NutritionCalculatorForm = () => {
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
  const [totals, setTotals] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 });

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
    calculateTotals(newIngredients);
  };

  const updateIngredient = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
    calculateTotals(newIngredients);
  };

  const calculateTotals = (currentIngredients) => {
    const validIngredients = currentIngredients.filter(ing => ing.name && ing.quantity);
    if (validIngredients.length > 0) {
      const parsedIngredients = validIngredients.map(ing => ({
        name: ing.name,
        quantity: parseFloat(ing.quantity) || 0
      }));
      const result = nutritionService.calculateNutrition(parsedIngredients);
      setTotals(result);
    } else {
      setTotals({ calories: 0, protein: 0, carbs: 0, fat: 0 });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Add Ingredients</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-3 items-end flex-wrap">
              <input
                type="text"
                placeholder="Ingredient name (e.g. Chicken)"
                value={ingredient.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                list={`ingredients-${index}`}
              />
              <input
                type="number"
                placeholder="Qty (g/ml)"
                value={ingredient.quantity}
                onChange={(e) => updateIngredient(index, 'quantity', e.target.value)}
                className="w-24 px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                min="0"
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="px-4 py-3 text-red-600 hover:text-red-700 font-medium"
                disabled={ingredients.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addIngredient}
          className="mt-4 px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-medium shadow-sm"
        >
          + Add Ingredient
        </button>
      </div>

      {totals.calories > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Total Nutrition ({ingredients.filter(ing => ing.name).length} ingredients)
          </h4>
          <NutritionTable nutrition={totals} />
        </div>
      )}
    </div>
  );
};

export default NutritionCalculatorForm;

