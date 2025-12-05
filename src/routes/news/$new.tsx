import { Link, createFileRoute } from "@tanstack/react-router";
import ErrorPage from "@/components/errors/ErrorPage";
import { AppErrorBoundary } from "@/core/error";
import DetailSection from "@/features/news/components/DetailSection";
import MostViewedNewsSection from "@/features/news/components/MostViewedNewsSection";
import { getArticleQueryOptions } from "@/features/news/query";

export const Route = createFileRoute("/news/$new")({
  component: RouteComponent,
  loader: async ({ context, params }) => {
    await context.queryClient.prefetchQuery(getArticleQueryOptions({ data: { id: params.new } }));
  },
  errorComponent: ({ error }: { error: Error }) => {
    return (
      <ErrorPage
        statusCode={500}
        title="Something went wrong"
        message="An unexpected error occured. Try refreshing the page, or head back home."
      />
    );
  },
});

function RouteComponent() {
  return (
    <section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 mb-4 sm:mb-6"
            >
              ← Back to List
            </Link>

            <AppErrorBoundary
              fallback={
                {
                  // notFound: <div>Not Found</div>,
                  // default: <div>Default Page</div>,
                }
              }
            >
              <DetailSection />
            </AppErrorBoundary>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <AppErrorBoundary>
                <MostViewedNewsSection />
              </AppErrorBoundary>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
