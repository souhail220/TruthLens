import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface SignUpStep2Props {
  onContinue: () => void;
  onSkip: () => void;
}

export function SignUpStep2({ onContinue, onSkip }: SignUpStep2Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Ajouter une image</h3>
        <p className="text-gray-600 text-sm">Optionnel - Vous pourrez la modifier plus tard</p>
      </div>

      {preview ? (
        <div className="space-y-4">
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-[#345AFB] shadow-lg">
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          </div>

          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
          >
            <X className="w-4 h-4" />
            Changer l'image
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#345AFB] hover:bg-blue-50 transition-colors"
        >
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
          <p className="text-gray-900 font-semibold mb-1">Glissez votre image ici</p>
          <p className="text-gray-600 text-sm mb-4">ou cliquez pour sélectionner un fichier</p>
          <p className="text-gray-500 text-xs">JPG, PNG ou GIF. Max 5 MB</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        aria-label="Upload image"
      />

      <button
        type="button"
        onClick={onContinue}
        className="w-full bg-[#345AFB] text-white py-3 rounded-lg font-semibold hover:bg-[#1827dd] transition-colors shadow-md hover:shadow-lg"
      >
        {preview ? 'Continuer' : 'Importer une image'}
      </button>

      <button
        type="button"
        onClick={onSkip}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        Ignorer cette étape
      </button>
    </div>
  );
}
