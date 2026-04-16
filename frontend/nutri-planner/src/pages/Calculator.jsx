import NutritionCalculatorForm from '../components/meal/NutritionCalculatorForm.jsx';

const Calculator = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
          Nutrition Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate total nutrition for your custom meal by adding ingredients
        </p>
      </div>
      
      <NutritionCalculatorForm />
    </div>
  );
};

export default Calculator;

