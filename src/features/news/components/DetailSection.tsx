import { useParams } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getArticleQueryOptions } from "../query";

const DetailSection = () => {
  const { new: newId } = useParams({strict: false});

  const { data, isError } = useSuspenseQuery({
    ...getArticleQueryOptions({data: { id: newId }}),
    select: (res) => res.result,
  })

  const article = data[0];
  
  return (
    <section>
      <div>
        {/* Article Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <span>{article.createdAt}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {article.categoryName}
            </span>
          </div>
        </div>

        {/* Article Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image.link}
              alt={article.title}
              loading="lazy"
              className="object-cover border w-full h-full"
            />
          </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p
            dangerouslySetInnerHTML={{ __html: article.content || "/newsCover.jpg" }}
            className="text-base text-gray-700 leading-loose whitespace-pre-line"
          />
        </div>

        {/* Tags */}
        {article.tags.length === 1 && article.tags[0] !== "" && (
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailSection;
