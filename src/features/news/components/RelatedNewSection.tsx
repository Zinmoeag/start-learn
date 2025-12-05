import { useSuspenseQuery } from "@tanstack/react-query";

import { Link } from "@tanstack/react-router";
import { getMostViewedArticlesQueryOptions } from "../query";

const RelatedNewsSection = () => {
  const { data, isError } = useSuspenseQuery({
    ...getMostViewedArticlesQueryOptions({ page: 1, pageSize: 90000 }),
  });

  console.log(isError, "isError =================");

  const relatedArticles = data.result.paginatedData;

  return (
    <section>
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>

        <div className="space-y-6">
          {relatedArticles.map((article: any) => (
            <div key={article.id} className="mb-6">
              <div className="text-sm font-medium text-gray-600 mb-2">{article.categoryName}</div>

              <Link to={`/news/${article.id}` as any} className="block group">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {article.title}
                </h3>

                {article.content && (
                  <p
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    className="text-sm text-gray-600 mb-2 line-clamp-2"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.createdAt}</span>
                  <span className="text-sm text-blue-600 group-hover:underline">Read more</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedNewsSection;
