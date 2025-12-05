import { useSuspenseQuery } from "@tanstack/react-query";
import { getMostViewedArticlesQueryOptions } from "@/features/news/query";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const MostViewedNewsSection = () => {
  const { data, isError } = useSuspenseQuery({
    ...getMostViewedArticlesQueryOptions({ page: 1, pageSize: 90000 }),
  });

  return (
    <section>
      <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Most Viewed</h2>

        <ol className="space-y-4">
          {data.result.paginatedData.map((item: any, index: number) => (
            <li key={item.id}>
              <a
                href={`/news/${item.id}`}
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
