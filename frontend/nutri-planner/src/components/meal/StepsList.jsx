const StepsList = ({ steps }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="px-6 py-4 border-b bg-gray-50 rounded-t-xl">
        <h3 className="text-lg font-semibold text-gray-900">Preparation Steps</h3>
      </div>
      <ol className="divide-y divide-gray-100">
        {steps.map((step, index) => (
          <li key={index} className="px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-900 leading-relaxed">{step}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepsList;

