const NutritionTable = ({ nutrition }) => {
  const macros = [
    { label: 'Calories', value: nutrition.calories, unit: 'kcal' },
    { label: 'Protein', value: nutrition.protein, unit: 'g' },
    { label: 'Carbs', value: nutrition.carbs, unit: 'g' },
    { label: 'Fat', value: nutrition.fat, unit: 'g' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Nutrition Facts</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {macros.map(({ label, value, unit }) => (
          <div key={label} className="px-6 py-4 flex justify-between items-center">
            <span className="text-gray-700 capitalize">{label}</span>
            <span className="font-semibold text-gray-900">
              {Math.round(value)} {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionTable;

