import { Check } from 'lucide-react';

interface SignUpStepperProps {
  currentStep: number;
  totalSteps: number;
}

export function SignUpStepper({ currentStep, totalSteps }: SignUpStepperProps) {
  const steps = [
    { number: 1, title: 'Créer un compte' },
    { number: 2, title: 'Ajouter une image' },
    { number: 3, title: 'Confirmation' },
  ];

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                step.number < currentStep
                  ? 'bg-[#345AFB] text-white'
                  : step.number === currentStep
                    ? 'bg-[#5c86fe] text-white ring-4 ring-[#5c86fe] ring-opacity-30'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.number < currentStep ? <Check className="w-5 h-5" /> : step.number}
            </div>
            <p
              className={`text-xs mt-2 font-medium text-center transition-colors ${
                step.number <= currentStep ? 'text-[#345AFB]' : 'text-gray-400'
              }`}
            >
              {step.title}
            </p>
          </div>

          {index < totalSteps - 1 && (
            <div
              className={`h-1 mx-2 flex-1 transition-colors ${
                step.number < currentStep ? 'bg-[#345AFB]' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
