export function TruthScoreSummary() {
  const score = 76;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (value: number) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 60) return 'text-blue-600';
    if (value >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (value: number) => {
    if (value >= 80) return '#16a34a';
    if (value >= 60) return '#345AFB';
    if (value >= 40) return '#eab308';
    return '#dc2626';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-8">Votre score de fiabilité</h2>

      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke={getProgressColor(score)}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.6s ease' }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}</span>
            <span className="text-xs text-gray-500">%</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Ce score reflète la fiabilité moyenne des contenus que vous consultez et analysez.
        </p>

        <div className="mt-6 w-full pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Contenus analysés</span>
              <span className="font-semibold text-gray-900">42</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Fiables</span>
              <span className="font-semibold text-green-600">34</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Douteux</span>
              <span className="font-semibold text-yellow-600">6</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Non fiables</span>
              <span className="font-semibold text-red-600">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
