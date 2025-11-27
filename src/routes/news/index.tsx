import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getAllNewsQueryOptions } from '@/features/news/query'
import { seo } from '@/ulits/seo'

export const Route = createFileRoute('/news/')({
  component: RouteComponent,
  loader: async ({context}) => {
    await context.queryClient.prefetchQuery(getAllNewsQueryOptions({ page: 1, pageSize: 10 }))
  },

  head: () => ({
    meta: [
      ...seo({ title: 'News - TanStack Start', description: 'Latest news articles', keywords:"news", image: 'http://korea-mm-guide-api-latest.onrender.com/uploads/1764135231226-V-2agV92-wLdL6OQL2u_ig.jpg' }),
    ],
  }),
})

function RouteComponent() {
  const dd = useSuspenseQuery({
    ...getAllNewsQueryOptions({ page: 1, pageSize: 10 }),
    select: (res) => res,
  })

  return (
    <section>
      {dd.data?.result?.paginatedData.map((article: any) => (
        <article key={article.id} className="mb-6 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.description}</p>
        </article>
      ))}
    </section>
  )
}
