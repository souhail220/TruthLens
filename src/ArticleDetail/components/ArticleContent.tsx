import { BadgeCheck, ThumbsUp, Share2, Users, FileText, CheckCircle, BarChart3, TrendingUp } from 'lucide-react';

interface EvaluationMetrics {
  sourcesAnalyzed: number;
  expertsReviewed: number;
  factChecks: number;
  crossSourceAgreement: number;
  informationConsistency: number;
  sourceQuality: number;
  expertVerification: number;
}

interface ArticleContentProps {
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  isVerified?: boolean;
  title: string;
  score: number;
  fullContent: string;
  evaluationMetrics: EvaluationMetrics;
  getScoreColor: (score: number) => string;
  getScoreTextColor: (score: number) => string;
  getScoreBgColor: (score: number) => string;
  getScoreStatus: (score: number) => { icon: any; text: string; color: string };
}

export function ArticleContent({
  mediaUrl,
  mediaType,
  isVerified,
  title,
  score,
  fullContent,
  evaluationMetrics,
  getScoreColor,
  getScoreTextColor,
  getScoreBgColor,
  getScoreStatus,
}: ArticleContentProps) {
  const scoreStatus = getScoreStatus(score);
  const StatusIcon = scoreStatus.icon;

  return (
    <>
      {mediaUrl && (
        <div className="mb-8 relative rounded-xl overflow-hidden">
          {mediaType === 'video' ? (
            <video
              src={mediaUrl}
              controls
              className="w-full h-auto max-h-96 object-cover"
            />
          ) : (
            <img
              src={mediaUrl}
              alt={title}
              className="w-full h-auto max-h-96 object-cover"
            />
          )}
          {isVerified && (
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
              <BadgeCheck className="w-6 h-6 text-[#345AFB]" />
            </div>
          )}
        </div>
      )}

      <div className={`border-2 rounded-xl p-6 mb-8 ${getScoreBgColor(score)}`}>
        <div className="space-y-6">
          {/* Main Score */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Score de fiabilité</h3>
              <StatusIcon className={`w-5 h-5 ${scoreStatus.color}`} />
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className={`text-4xl font-bold ${getScoreTextColor(score)}`}>
                {score}%
              </span>
              <span className={`text-sm font-medium ${scoreStatus.color}`}>
                {scoreStatus.text}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getScoreColor(score)}`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="pt-6 border-t border-gray-300">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Critères d'évaluation</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Sources Analyzed */}
              <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{evaluationMetrics.sourcesAnalyzed}</div>
                  <div className="text-xs text-gray-600">Sources analysées</div>
                </div>
              </div>

              {/* Experts Reviewed */}
              <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{evaluationMetrics.expertsReviewed}</div>
                  <div className="text-xs text-gray-600">Experts consultés</div>
                </div>
              </div>

              {/* Fact Checks */}
              <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{evaluationMetrics.factChecks}</div>
                  <div className="text-xs text-gray-600">Vérifications effectuées</div>
                </div>
              </div>

              {/* Cross-Source Agreement */}
              <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{evaluationMetrics.crossSourceAgreement}%</div>
                  <div className="text-xs text-gray-600">Concordance sources</div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Comparison */}
          <div className="pt-6 border-t border-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-gray-600" />
              <h4 className="text-sm font-semibold text-gray-900">Comparaison entre sources</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Cohérence des informations</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${evaluationMetrics.informationConsistency}%` }}></div>
                  </div>
                  <span className="text-green-600 font-semibold w-10 text-right">{evaluationMetrics.informationConsistency}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Qualité des sources</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${evaluationMetrics.sourceQuality}%` }}></div>
                  </div>
                  <span className="text-blue-600 font-semibold w-10 text-right">{evaluationMetrics.sourceQuality}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Vérification par experts</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${evaluationMetrics.expertVerification}%` }}></div>
                  </div>
                  <span className="text-purple-600 font-semibold w-10 text-right">{evaluationMetrics.expertVerification}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {fullContent}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium">
          <ThumbsUp className="w-5 h-5" />
          Utile
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium">
          <Share2 className="w-5 h-5" />
          Partager
        </button>
      </div>
    </>
  );
}
