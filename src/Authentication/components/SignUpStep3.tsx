import { CheckCircle } from 'lucide-react';

interface SignUpStep3Props {
  onFinish: () => void;
}

export function SignUpStep3({ onFinish }: SignUpStep3Props) {
  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#5c86fe] rounded-full animate-pulse opacity-20" />
          <CheckCircle className="w-20 h-20 text-[#345AFB] relative" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Compte créé avec succès</h3>
        <p className="text-gray-600 leading-relaxed">
          Votre compte a été créé. Veuillez vérifier votre boîte e-mail et cliquer sur le lien
          d'activation pour commencer à utiliser TruthLens.
        </p>
      </div>

      <div className="bg-blue-50 border-2 border-[#5c86fe] rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Conseil :</span> Si vous ne recevez pas d'e-mail dans les
          5 minutes, vérifiez votre dossier spam.
        </p>
      </div>

      <button
        onClick={onFinish}
        className="w-full bg-[#345AFB] text-white py-3 rounded-lg font-semibold hover:bg-[#1827dd] transition-colors shadow-md hover:shadow-lg"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}
