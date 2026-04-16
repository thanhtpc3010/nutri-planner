import nutritionData from '../data/nutrition.json' with { type: 'json' };

export const nutritionService = {
  getNutritionData: () => nutritionData,

  calculateNutrition: (ingredients) => {
    const totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };

    ingredients.forEach(({ name, quantity }) => {
      const baseNutrition = nutritionData[name];
      if (baseNutrition) {
        // Assume quantity is in base unit (g/ml), simple scaling
        const factor = quantity / 100;
        totals.calories += baseNutrition.calories * factor;
        totals.protein += baseNutrition.protein * factor;
        totals.carbs += baseNutrition.carbs * factor;
        totals.fat += baseNutrition.fat * factor;
      }
    });

    return totals;
  }
};

export default nutritionService;

