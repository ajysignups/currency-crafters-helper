import { useState } from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
];

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Mock conversion (in real app, this would call an API)
    const mockRate = 0.85;
    setResult(Number(amount) * mockRate);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg animate-fade-in">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
            className="mt-6"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </Button>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-center text-lg">
              <span className="font-medium">
                {amount} {fromCurrency}
              </span>{" "}
              =
              <span className="font-medium">
                {" "}
                {result.toFixed(2)} {toCurrency}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyCalculator;