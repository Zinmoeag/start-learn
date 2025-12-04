import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query';
import { getArticleQueryOptions } from '@/features/news/query';

export const Route = createFileRoute('/news/$new')({
  component: RouteComponent,
  loader: async ({context, params}) => {
    await context.queryClient.prefetchQuery(getArticleQueryOptions({data: { id: params.new }}));
  },
  errorComponent: ({error, reset}) => {
    console.log(error, "Error [[[[[[[[[[[[[[[[[[[")
    return <div className='text-red-500'>{error.message}</div>
  },
})

function RouteComponent() {
  const { new: newId } = Route.useParams();
  const { data } = useSuspenseQuery({
    ...getArticleQueryOptions({data: { id: newId }}),
    select: (res) => res.result,
  })

  return <div>{data[0].title}</div>
}
