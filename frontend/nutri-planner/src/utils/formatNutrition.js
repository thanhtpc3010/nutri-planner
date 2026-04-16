export const formatNutritionValue = (value) => {
  return Math.round(value * 10) / 10;
};

export const formatCalories = (calories) => {
  return `${formatNutritionValue(calories)} kcal`;
};

export const formatMacro = (value, label) => {
  return `${formatNutritionValue(value)}g ${label}`;
};

export const nutritionSummary = (nutrition) => {
  return {
    calories: formatCalories(nutrition.calories),
    protein: formatMacro(nutrition.protein, 'P'),
    carbs: formatMacro(nutrition.carbs, 'C'),
    fat: formatMacro(nutrition.fat, 'F')
  };
};

