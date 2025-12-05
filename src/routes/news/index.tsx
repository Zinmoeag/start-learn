import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getAllNewsQueryOptions } from '@/features/news/query'
import { seo } from '@/ulits/seo'

export const Route = createFileRoute('/news/')({
  component: RouteComponent,
  loader: async ({context}) => {
    await context.queryClient.prefetchQuery(getAllNewsQueryOptions({ page: 1, pageSize: 10 }))
  },

  head: ( ) => ({
    meta: [
      ...seo({ title: 'News - TanStack Start', description: 'Latest news articles', keywords:"news", image: 'https://images.unsplash.com/photo-1761839257349-037aea1d94de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
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
