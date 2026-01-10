import { useState } from 'react';
import { Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignUpStepper } from '../components/SignUpStepper';
import { SignUpStep1 } from '../components/SignUpStep1';
import { SignUpStep2 } from '../components/SignUpStep2';
import { SignUpStep3 } from '../components/SignUpStep3';

export function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleStep1Continue = (data: { name: string; email: string; password: string }) => {
    setFormData(data);
    setCurrentStep(2);
  };

  const handleStep2Continue = () => {
    setCurrentStep(3);
  };

  const handleStep3Finish = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-[#345AFB] hover:text-[#1827dd] transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5" />
            Retour
          </Link>

          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">TruthLens</span>
            </div>
            <p className="text-gray-600 mt-3">Rejoignez-nous pour découvrir la vérité</p>
          </div>

          <div className="mb-12">
            <SignUpStepper currentStep={currentStep} totalSteps={3} />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            {currentStep === 1 && <SignUpStep1 onContinue={handleStep1Continue} />}
            {currentStep === 2 && (
              <SignUpStep2 onContinue={handleStep2Continue} onSkip={handleStep2Continue} />
            )}
            {currentStep === 3 && <SignUpStep3 onFinish={handleStep3Finish} />}
          </div>

          {currentStep < 3 && (
            <p className="text-center text-gray-600 text-sm mt-6">
              Vous avez déjà un compte ?{' '}
              <a href="/login" className="text-[#345AFB] font-semibold hover:text-[#1827dd] transition-colors">
                Se connecter
              </a>
            </p>
          )}
        </div>
      </div>

      <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-600">
        <p>© 2025 TruthLens. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
