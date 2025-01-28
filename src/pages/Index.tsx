import CurrencyCalculator from "@/components/CurrencyCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Currency Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Fast, reliable currency conversions at your fingertips
          </p>
        </div>
        <CurrencyCalculator />
      </div>
    </div>
  );
};

export default Index;