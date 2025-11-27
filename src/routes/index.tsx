import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App, loader: () => {
  return {data: 'Hello'}
} })

function App() {
  const data = Route.useLoaderData();
  return (
    <div>
      <div>Hello {data.data} mello</div>  
    </div>
  )
}
