interface NewsItem {
  title: string;
  source: string;
  time: string;
}

const newsItems: NewsItem[] = [
  { title: 'IA générative', source: 'TechNews', time: '2h' },
  { title: 'Transition énergétique', source: 'Éco Observer', time: '4h' },
  { title: 'Innovation médicale', source: 'Health Science', time: '6h' },
];

export function NewsContent() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Actualités récentes</h3>
      <div className="space-y-3">
        {newsItems.map((item, idx) => (
          <div key={idx} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <p className="font-medium text-sm text-gray-900">{item.title}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-600">{item.source}</span>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
