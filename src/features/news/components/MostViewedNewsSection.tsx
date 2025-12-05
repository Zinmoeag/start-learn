import { errorKinds } from "@/core/error";

const mockMostViewed = [
  {
    id: "1",
    title: "Breaking News: Market Hits Record Highs",
    createdAt: "2025-01-15T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Tech Innovation: AI Transforming Future Jobs",
    createdAt: "2025-01-11T08:30:00.000Z",
  },
  {
    id: "3",
    title: "Health Update: New Fitness Trends in 2025",
    createdAt: "2025-01-10T14:45:00.000Z",
  },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const MostViewedNewsSection = () => {
    throw new Error(errorKinds.notFound);
  return (
    <section>
      <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Most Viewed</h2>

        <ol className="space-y-4">
          {mockMostViewed.map((item, index) => (
            <li key={item.id}>
              <a
                href={`/article/${item.id}`}
                className="block group hover:text-blue-600 transition-colors"
              >
                <div className="flex gap-3">
                  <span className="shrink-0 text-lg font-bold text-gray-400">{index + 1}</span>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{formatDate(item.createdAt)}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default MostViewedNewsSection;
